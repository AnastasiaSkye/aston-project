import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from 'entities/user';
import { AuthStatus, SearchHistory } from 'shared/config';

import { history } from './history';

interface useHistoryResult {
	searchHistory: SearchHistory;
	setSearchHistory: React.Dispatch<React.SetStateAction<SearchHistory>>;
	isHistoryLoading: boolean;
}

export const useHistory = (): useHistoryResult => {
	const { authStatus } = useAuth();
	const [searchHistory, setSearchHistory] = useState<SearchHistory>([]);
	const [isHistoryLoading, setIsHistoryLoading] = useState<boolean>(true);

	const getSearchHistory = useCallback(async (): Promise<void> => {
		setIsHistoryLoading(true);
		setSearchHistory(await history.getSearchHistory());
		setIsHistoryLoading(false);
	}, [setSearchHistory]);

	useEffect(() => {
		if (authStatus === AuthStatus.SignedIn) {
			void getSearchHistory();
		} else {
			setSearchHistory([]);
			setIsHistoryLoading(false);
		}
	}, [authStatus, getSearchHistory, setSearchHistory]);

	return { searchHistory, setSearchHistory, isHistoryLoading };
};