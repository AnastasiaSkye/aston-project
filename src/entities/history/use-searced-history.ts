import React from 'react';

import { SearchHistory } from 'shared/config';

import { history } from './history';

interface useHistoryResult {
	historyRemoveStarted: () => Promise<void>
}

export const useSearchedHistory = (id : string, setSearchHistory : React.Dispatch<React.SetStateAction<SearchHistory>>): useHistoryResult => {

	const historyRemoveStarted = async (): Promise<void> => {
		await history.removeSearchedHistory(id);
		setSearchHistory(history => history.filter(h => h.id !== id));
	};

	return { historyRemoveStarted };
};