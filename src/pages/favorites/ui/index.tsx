import { useCallback, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useFavorites } from 'entities/favorite';
import { Fallback, Loader } from 'shared/ui';
import { PlantType } from 'shared/config';
import { usePlant } from 'shared/lib';

export function Favorites() {
	const [favoritePlants, setFavoritePlants] = useState<PlantType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const { favorites, isFavoritesLoading } = useFavorites();
	const { getPlantsById, filterPlants } = usePlant();

	const getFavoritePlants = useCallback(async (): Promise<void> => {
		try {
			setIsLoading(true);
			const favoritePlants = await Promise.all(
				favorites.map(async (id: number) =>
					await getPlantsById(id)
				)
			);
			setFavoritePlants(filterPlants(favoritePlants));
		} finally {
			setIsLoading(false);
		}
	}, [favorites, getPlantsById, filterPlants]);

	useEffect(() => {
		if (favorites.length !== 0) {
			void getFavoritePlants();
		} else {
			setIsLoading(false)
		}
	}, [favorites, getFavoritePlants]);

	return isLoading || isFavoritesLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Favourite plants' data={favoritePlants} favorites={favorites}
					  setFavoritePlants={setFavoritePlants}/>
		</ErrorBoundary>
	);
}