import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import { PlantDetails } from 'entities/plant';
import { useFavorites } from 'entities/favorite';
import { useGetPlantsByIdQuery } from 'shared/api';
import { Fallback, Loader } from 'shared/ui';

import './styles.css';

export function Plant() {
	const { id } = useParams();
	const { data: plant, isLoading } = useGetPlantsByIdQuery(Number(id));
	const { favoritesId , isFavoritesIdLoading } = useFavorites();

	return isLoading || isFavoritesIdLoading ? (
		<Loader />
	) : (
		<ErrorBoundary FallbackComponent={Fallback}>
			{plant ?
				<PlantDetails plant={plant} favoritesId={favoritesId}/>
				:
				<h2 className='nothing-found'>Nothing found</h2>
			}
		</ErrorBoundary>
	);
}