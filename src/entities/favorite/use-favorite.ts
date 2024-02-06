import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FavoritesContext } from 'app/contexts';
import { useAuth } from 'entities/user';
import { AuthStatus, RouteName } from 'shared/config';

import { favorite } from './favorite';

interface useFavoriteResult {
	isFavorite: boolean;
	changeFavorite: () => Promise<void>;
}

export const useFavorite = (id: number): useFavoriteResult => {
	const { authStatus } = useAuth();
	const { favoritesId, setFavoritesId } = useContext(FavoritesContext);
	const [isFavorite, setIsFavorite] = useState<boolean>(favoritesId.includes(id));
	const navigate = useNavigate();

	const removeFavoriteId = useCallback((id: number): void => {
		setFavoritesId(favorite => favorite.filter(f => f !== id));
	}, [setFavoritesId]);

	const changeFavorite = async (): Promise<void> => {
		if (authStatus === AuthStatus.SignedIn) {
			if (isFavorite) {
				void await favorite.removeFavorite(id);
				setIsFavorite(false);
				removeFavoriteId(id);
			} else {
				void await favorite.addFavorite(id);
				setIsFavorite(true);
			}
		} else {
			navigate(RouteName.REGISTRATION_PAGE);
		}
	};

	return {
		isFavorite,
		changeFavorite
	};
};