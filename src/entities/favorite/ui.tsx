import React, { memo } from 'react';

import { PlantCard } from 'entities/plant';
import { useGetPlantByIdQuery } from 'shared/api';

interface Props {
	favoriteId: number;
}

export const FavoriteCard = memo(({ favoriteId }: Props) => {
	const { data: favoritePlant, isLoading } = useGetPlantByIdQuery(favoriteId);
	return (
		<>
			{!isLoading && favoritePlant &&
				<PlantCard plant={favoritePlant} />
			}
		</>
	);
});