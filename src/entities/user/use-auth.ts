import { useCallback } from 'react';

import { firebaseApi } from 'shared/api';
import { AppError, getAuthStatus, getUser, useAppDispatch, useAppSelector } from 'shared/lib';
import { AuthStatus, User } from 'shared/config';

import { slice } from './slice';

interface useAuthResult {
	user: User;
	authStatus: AuthStatus;
	signUp: (email: string, password: string) => Promise<void>;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
	authChecked: () => Promise<void>;
}

export const useAuth = (): useAuthResult => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(getUser);
	const authStatus = useAppSelector(getAuthStatus);

	const signUp = useCallback(async (email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signUp(email, password);
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			dispatch(slice.userSignedUp(user));
		} catch (e) {
			dispatch(slice.userSignedOut());
			throw AppError(e);
		}
	}, [dispatch]);

	const signIn = useCallback(async (email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signIn(email, password);
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			dispatch(slice.userSignedIn(user));
		} catch (e) {
			dispatch(slice.userSignedOut());
			throw AppError(e);
		}
	}, [dispatch]);

	const signOut = useCallback(async (): Promise<void> => {
		try {
			void await firebaseApi.signOut();
		} finally {
			dispatch(slice.userSignedOut());
		}
	}, [dispatch]);

	const authChecked = useCallback(async (): Promise<void> => {
		try {
			const data = await firebaseApi.refresh();
			if (!data) {
				dispatch(slice.userSignedOut());
				return;
			}
			const user = { email: data.email ?? '', id: data.uid };
			dispatch(slice.userSignedIn(user));
		} catch (e) {
			dispatch(slice.userSignedOut());
			throw AppError(e);
		}
	}, [dispatch]);

	return {
		user,
		authStatus,
		signUp,
		signIn,
		signOut,
		authChecked
	};
};