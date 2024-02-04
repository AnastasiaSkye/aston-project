import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useFavoritePlants, useFavorites } from 'entities/favorite';
import { Fallback, Loader } from 'shared/ui';

export function Favorites() {
	const { favoritesId, isFavoritesIdLoading } = useFavorites();
	const { favoritePlants, isFavoritePlantsLoading, setFavoritePlants } = useFavoritePlants();

	return isFavoritePlantsLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Favorite plants' plants={favoritePlants} favoritesId={favoritesId}
					  setFavoritePlants={setFavoritePlants}/>
		</ErrorBoundary>
	);
}