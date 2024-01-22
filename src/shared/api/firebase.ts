import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	User,
	UserCredential
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

import { FirebaseConfig } from 'shared/config';

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);

export const firebaseApi = {
	async signUp(email: string, password: string): Promise<UserCredential> {
		return await createUserWithEmailAndPassword(auth, email, password);
	},
	async signIn(email: string, password: string): Promise<UserCredential> {
		return await signInWithEmailAndPassword(auth, email, password);
	},
	async signOut(): Promise<void> {
		await signOut(auth);
	},
	async refresh(): Promise<User | null | undefined> {
		await auth.authStateReady();
		return auth.currentUser;
	}
};
