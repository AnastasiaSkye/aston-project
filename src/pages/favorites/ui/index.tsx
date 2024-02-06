import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { FavoriteCard, useFavoritesId } from 'entities/favorite';
import { Fallback, Loader } from 'shared/ui';

export function Favorites() {
	const { favoritesId, isFavoritesIdLoading } = useFavoritesId();

	return isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Favorite plants' isEmpty={favoritesId.length === 0}>
				{favoritesId.map((item: number) =>
					<FavoriteCard key={item} favoriteId={item} />
				)}
			</CardList>
		</ErrorBoundary>
	);
}