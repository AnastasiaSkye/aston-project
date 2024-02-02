import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { useFavorites } from 'entities/favorite';
import { useGetPlantsQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';

export function Main() {
	const { data: plantsList = [], isLoading } = useGetPlantsQuery();
	const { favorites, isFavoritesLoading } = useFavorites();

	return isLoading || isFavoritesLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Indoor plants' data={plantsList} favorites={favorites} />
		</ErrorBoundary>
	);
}