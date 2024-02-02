import { useCallback, useEffect, useState } from 'react';

import { useAuth } from 'entities/user';
import { AuthStatus } from 'shared/config';

import { favorite } from './favorite';

export const useFavorites = () => {
	const { authStatus } = useAuth();
	const [favorites, setFavorites] = useState<number[]>([]);
	const [isFavoritesLoading, setIsFavoritesLoading] = useState<boolean>(false);

	const readFavorites = useCallback(async (): Promise<void> => {
		setIsFavoritesLoading(true);
		const favoritesData = await favorite.readFavorites();
		setFavorites(favoritesData);
		setIsFavoritesLoading(false);
	}, []);

	useEffect(() => {
		if (authStatus === AuthStatus.SignedIn) {
			void readFavorites();
		} else {
			setFavorites([]);
		}
	}, [authStatus, readFavorites]);

	return {
		favorites,
		isFavoritesLoading
	};
};