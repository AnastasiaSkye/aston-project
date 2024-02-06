import React, { createContext } from 'react';

interface FavoriteType {
	favoritesId: number[];
	setFavoritesId: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FavoritesContext = createContext<FavoriteType>({
	favoritesId: [],
	setFavoritesId: () => {}
});