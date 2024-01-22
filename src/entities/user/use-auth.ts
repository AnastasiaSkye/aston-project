import { firebaseApi, LSApi } from 'shared/api';
import { useAppSelector } from 'shared/lib';

import { useRedux } from './use-redux';

export const useAuth = () => {
	const { user, authStatus } = useAppSelector(state => state.user)

	const redux = useRedux();

	const signUp = async(email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signUp(email, password);
			const token = await userCredential.user.getIdToken();
			LSApi.saveToken(token)
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			redux.userSignedUp(user);
		} catch (e) {
			redux.userSignedOut();
		}
	}
	const signIn = async(email: string, password: string): Promise<void> => {
		try {
			const userCredential = await firebaseApi.signIn(email, password);
			const token = await userCredential.user.getIdToken();
			LSApi.saveToken(token)
			const user = { id: userCredential.user.uid, email: userCredential.user.email || '' };
			redux.userSignedIn(user);
		} catch (e) {
			redux.userSignedOut();
		}
	}
	const signOut = async(): Promise<void> => {
		try {
			void await firebaseApi.signOut();
		} finally {
			LSApi.saveToken('');
			redux.userSignedOut();
		}
	}
	const authChecked = async(): Promise<void> => {
		try {
			const token = LSApi.readToken()
			if (!token) {
				redux.userSignedOut();
				return;
			}
			const data = await firebaseApi.refresh();
			if (!data) {
				redux.userSignedOut();
				return;
			}
			const user = { email: data.email ?? '', id: data.uid }
			const newToken = await data.getIdToken()
			LSApi.saveToken(newToken)
			redux.userSignedIn(user)
		} catch (e) {
			redux.userSignedOut();
		}
	}

	return {
		user,
		authStatus,
		signUp,
		signIn,
		signOut,
		authChecked
	}
};