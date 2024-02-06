import { ErrorBoundary } from 'react-error-boundary';

import { PlantCard } from 'entities/plant';
import { CardList } from 'widgets/card-list';
import { useFavoritesId } from 'entities/favorite';
import { useGetPlantsQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';
import { PlantType } from 'shared/config';

export function Main() {
	const { data: plants = [], isLoading } = useGetPlantsQuery();
	const { isFavoritesIdLoading } = useFavoritesId();

	return isLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			<CardList title='Indoor plants' isEmpty={plants.length === 0}>
				{plants.map((item: PlantType) =>
					<PlantCard key={item.id} plant={item} />
				)}
			</CardList>
		</ErrorBoundary>
	);
}