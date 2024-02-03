import { useCallback, useEffect, useState } from 'react';

import { PlantType } from 'shared/config';
import { usePlant } from 'shared/lib';

import { useFavorites } from './use-favorites';

export const useFavoritePlants = () => {
	const { getPlants } = usePlant();
	const { favoritesId, isFavoritesIdLoading } = useFavorites();
	const [favoritePlants, setFavoritePlants] = useState<PlantType[]>([]);
	const [isFavoritePlantsLoading, setIsFavoritePlantsLoading] = useState<boolean>(true);

	const getFavoritePlants = useCallback(async (): Promise<void> => {
		try {
			setIsFavoritePlantsLoading(true);
			setFavoritePlants(await getPlants(favoritesId));
		} finally {
			setIsFavoritePlantsLoading(false);
		}
	}, [favoritesId, getPlants]);

	useEffect(() => {
		if (favoritesId.length !== 0) {
			void getFavoritePlants();
		} else if (!isFavoritesIdLoading) {
			setIsFavoritePlantsLoading(false)
		}
	}, [favoritesId, getFavoritePlants, isFavoritesIdLoading]);

	return {
		favoritePlants,
		isFavoritePlantsLoading,
		setFavoritePlants
	};
};