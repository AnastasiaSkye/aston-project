import { useCallback, useContext, useEffect, useState } from 'react';

import { FavoritesContext } from 'app/contexts';
import { useAuth } from 'entities/user';
import { AuthStatus } from 'shared/config';

import { favorite } from './favorite';

export const useFavorites = () => {
	const { authStatus } = useAuth();
	const { favoritesId, setFavoritesId } = useContext(FavoritesContext);
	const [isFavoritesIdLoading, setIsFavoritesIdLoading] = useState<boolean>(true);

	const readFavorites = useCallback(async (): Promise<void> => {
		setIsFavoritesIdLoading(true);
		const favoritesData = await favorite.readFavorites();
		setFavoritesId(favoritesData);
		setIsFavoritesIdLoading(false);
	}, []);

	useEffect(() => {
		if (authStatus === AuthStatus.SignedIn) {
			void readFavorites();
		} else {
			setFavoritesId([]);
			setIsFavoritesIdLoading(false);
		}
	}, [authStatus, readFavorites]);

	return {
		favoritesId,
		isFavoritesIdLoading
	}
};