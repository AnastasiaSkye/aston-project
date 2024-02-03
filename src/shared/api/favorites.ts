import { PlantDetailsResponse, PlantType } from 'shared/config';
import { transformPlantDetailsToPlant } from 'shared/lib';

export const favoritesApi = {
	async getPlantById(id : number) : Promise<PlantType | undefined> {
		try {
			const response = await fetch(`${process.env.REACT_APP_PLANTS_API_HOST}/species/details/${id}?key=${process.env.REACT_APP_PLANTS_API_KEY}`, {
				method: 'GET',
				headers: {
					Accept: 'application/json'
				}
			})
			const result = (await response.json()) as PlantDetailsResponse;
			return transformPlantDetailsToPlant(result);
		} catch (e) {}
	}
}