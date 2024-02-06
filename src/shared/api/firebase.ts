import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	User,
	UserCredential
} from 'firebase/auth';
import { child, get, getDatabase, push, ref, set, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import { FirebaseConfig, SearchHistory } from 'shared/config';
import { formatDate } from 'shared/lib';

const app = initializeApp(FirebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app, process.env.REACT_APP_FIREBASE_DB_URL);

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
	},

	async addFavorite(plantId: number): Promise<void> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return;
		}
		const favoriteListRef = ref(database, 'favorites/' + userId);
		const newFavoriteRef = push(favoriteListRef);
		await set(newFavoriteRef, plantId);
	},

	async removeFavorite(plantId: number): Promise<void> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return;
		}
		const favoriteListRef = ref(database, 'favorites/' + userId);
		const favorites = await this.readFavorites();
		const newFavorites = favorites.filter(f => f !== plantId);
		await set(favoriteListRef, newFavorites);
	},

	async readFavorites(): Promise<number[]> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return [];
		}
		const dbRef = ref(database);
		const snapshot = await get(child(dbRef, 'favorites/' + userId));
		if (snapshot.exists()) {
			return Object.values(snapshot.val());
		} else {
			return [];
		}
	},

	async addSearchedHistory (query: string): Promise<void> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return;
		}
		const searchListRef = ref(database, 'history/' + userId);
		const newSearchesRef = push(searchListRef);
		await set(newSearchesRef, {
				query,
				data: formatDate(new Date())
		});
	},

	async removeSearchedHistory (id: string): Promise<void> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return;
		}
		const searchRef = ref(database, 'history/' + userId + '/' + id);
		await remove(searchRef);
	},

	async getSearchHistory (): Promise<SearchHistory> {
		const userId = auth.currentUser?.uid;
		if (!userId) {
			return [];
		}
		const dbRef = ref(database);
		const snapshot = await get(child(dbRef, 'history/' + userId));
		if (snapshot.exists()) {
			const data = snapshot.val() as Record<string, {query: string, data: string}>;
			return Object.entries(data).map(([key, value]) => ({ id: key, query: value.query, data: value.data }));
		} else {
			return [];
		}
	}
};
