import { firebaseApi } from 'shared/api';
import { SearchHistory } from 'shared/config';

export const history = {
	async addSearchedHistory(query: string): Promise<void> {
		void await firebaseApi.addSearchedHistory(query);
	},

	async removeSearchedHistory(id: string): Promise<void> {
		void await firebaseApi.removeSearchedHistory(id);
	},

	async getSearchHistory(): Promise<SearchHistory> {
		return await firebaseApi.getSearchHistory();
	}
};