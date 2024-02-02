import { useCallback } from 'react';

import { favoritesApi } from 'shared/api';
import { useAppDispatch } from 'shared/lib';
import { PlantType } from 'shared/config';

export const usePlant = () => {
	const dispatch = useAppDispatch();

	const getPlantsById = useCallback(async (id: number): Promise<PlantType | undefined> => {
		const { data } = await dispatch(favoritesApi.endpoints.getPlantsById.initiate(id));
		if (!data) {
			return data;
		}
		return data;
	}, [dispatch]);

	const filterPlants = useCallback((plants: (PlantType | undefined)[]): PlantType[] => {
		let data = [];
		for (let el of plants) {
			if (el !== undefined) {
				data.push(el);
			}
		}
		return data;
	}, []);

	return {
		getPlantsById,
		filterPlants
	};
};