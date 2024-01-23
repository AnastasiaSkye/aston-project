import { useCallback } from 'react';

import { firebaseApi } from 'shared/api';
import { useAppDispatch, useAppSelector } from 'shared/lib';

import { slice } from './slice';

export const useAuth = () => {
	const dispatch = useAppDispatch();
	const { user, authStatus } = useAppSelector(state => state.user)

	const signUp = async(email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signUp(email, password);
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			dispatch(slice.userSignedUp(user));
		} catch (e) {
			dispatch(slice.userSignedOut());
		}
	}
	const signIn = async(email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signIn(email, password);
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			dispatch(slice.userSignedIn(user));
		} catch (e) {
			dispatch(slice.userSignedOut());
		}
	}
	const signOut = async(): Promise<void> => {
		try {
			void await firebaseApi.signOut();
		} finally {
			dispatch(slice.userSignedOut());
		}
	}
	const authChecked = useCallback(async(): Promise<void> => {
		try {
			const data = await firebaseApi.refresh();
			if (!data) {
				dispatch(slice.userSignedOut());
				return;
			}
			const user = { email: data.email ?? '', id: data.uid }
			dispatch(slice.userSignedIn(user))
		} catch (e) {
			dispatch(slice.userSignedOut());
		}
	}, [dispatch])

	return {
		user,
		authStatus,
		signUp,
		signIn,
		signOut,
		authChecked
	}
};