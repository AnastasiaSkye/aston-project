import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useFavorites } from 'entities/favorite';
import { useGetPlantsQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';

export function Main() {
	const { data: plantsList = [], isLoading } = useGetPlantsQuery();
	const { favoritesId, isFavoritesIdLoading } = useFavorites();

	return isLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Indoor plants' plants={plantsList} favoritesId={favoritesId}/>
		</ErrorBoundary>
	);
}