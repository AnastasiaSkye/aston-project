import { useCallback } from 'react';

import { favoritesApi } from 'shared/api';
import { PlantType } from 'shared/config';

export const usePlant = () => {

	const getPlantById = useCallback(async (id: number): Promise<PlantType | undefined> =>
			await favoritesApi.getPlantById(id)
		, []);

	const filterPlants = useCallback((plants: (PlantType | undefined)[]): PlantType[] => {
		let data = [];
		for (let el of plants) {
			if (el !== undefined) {
				data.push(el);
			}
		}
		return data;
	}, []);

	const getPlants = useCallback(async (favorites: number[]): Promise<PlantType[]> => {
		const favoritePlants = await Promise.all(
			favorites.map(async (id: number) =>
				await getPlantById(id)
			)
		);
		return filterPlants(favoritePlants);
	}, [filterPlants, getPlantById]);

	return {
		getPlants
	};
};