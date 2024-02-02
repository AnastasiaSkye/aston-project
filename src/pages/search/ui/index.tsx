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
	const { favorites, isFavoritesLoading } = useFavorites();

	return isLoading || isFavoritesLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Search results' data={plantsList} favorites={favorites} />
		</ErrorBoundary>

	);
}