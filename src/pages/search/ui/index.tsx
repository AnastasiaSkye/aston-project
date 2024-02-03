import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useFavorites } from 'entities/favorite';
import { useGetPlantsByNameQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';

export function Search() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query') || '';
	const { data: plantsList = [], isLoading } = useGetPlantsByNameQuery(query);
	const { favoritesId, isFavoritesIdLoading } = useFavorites();

	return isLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Search results' plants={plantsList} favoritesId={favoritesId} />
		</ErrorBoundary>

	);
}