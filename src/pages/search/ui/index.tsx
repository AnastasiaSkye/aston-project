import { useSearchParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { CardList } from 'widgets/card-list';
import { PlantCard } from 'entities/plant';
import { useFavoritesId } from 'entities/favorite';
import { useGetPlantsByNameQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';
import { PlantType } from 'shared/config';

export function Search() {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query') || '';
	const { data: plants = [], isLoading } = useGetPlantsByNameQuery(query);
	const { isFavoritesIdLoading } = useFavoritesId();

	return isLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Search results' isEmpty={plants.length === 0}>
				{plants.map((item: PlantType) =>
					<PlantCard key={item.id} plant={item} />
				)}
			</CardList>
		</ErrorBoundary>

	);
}