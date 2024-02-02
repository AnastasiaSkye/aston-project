import { firebaseApi } from 'shared/api';

export const favorite = {
	async addFavorite(id: number): Promise<void> {
		void await firebaseApi.addFavorite(id);
	},

	async removeFavorite(id: number): Promise<void> {
		void await firebaseApi.removeFavorite(id);
	},

	async readFavorites(): Promise<number[]> {
		return await firebaseApi.readFavorites();
	}
};