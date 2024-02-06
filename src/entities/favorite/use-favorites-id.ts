import { useCallback, useContext, useEffect, useState } from 'react';

import { FavoritesContext } from 'app/contexts';
import { useAuth } from 'entities/user';
import { AuthStatus } from 'shared/config';

import { favorite } from './favorite';

interface useFavoritesIdResult {
	favoritesId: number[];
	isFavoritesIdLoading: boolean;
}

export const useFavoritesId = (): useFavoritesIdResult => {
	const { authStatus } = useAuth();
	const { favoritesId, setFavoritesId } = useContext(FavoritesContext);
	const [isFavoritesIdLoading, setIsFavoritesIdLoading] = useState<boolean>(true);

	const readFavorites = useCallback(async (): Promise<void> => {
		setIsFavoritesIdLoading(true);
		setFavoritesId(await favorite.readFavorites());
		setIsFavoritesIdLoading(false);
	}, [setFavoritesId]);

	useEffect(() => {
		if (authStatus === AuthStatus.SignedIn) {
			void readFavorites();
		} else {
			setFavoritesId([]);
			setIsFavoritesIdLoading(false);
		}
	}, [authStatus, readFavorites, setFavoritesId]);

	return {
		favoritesId,
		isFavoritesIdLoading
	};
};