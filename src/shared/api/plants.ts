import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PlantDetailsResponse, PlantDetailsType, PlantsResponse, PlantType } from 'shared/config';
import { transformPlantDetails, transformPlants } from 'shared/lib';

export const plantsApi = createApi({
	baseQuery: fetchBaseQuery({
		method: 'GET',
		baseUrl: process.env.REACT_APP_PLANTS_API_HOST
	}),
	reducerPath: 'plantsApi',
	endpoints: build => ({
		getPlants: build.query<PlantType[], void>({
			query: () => ({
				url: '/species-list',
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY,
					indoor: 1,
					page: 5
				}
			}),
			transformResponse: (res: PlantsResponse) => transformPlants(res)
		}),
		getPlantsByName: build.query<PlantType[], string>({
			query: name => ({
				url: '/species-list',
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY,
					q: name
				}
			}),
			transformResponse: (res: PlantsResponse) => transformPlants(res)
		}),
		getPlantsById: build.query<PlantDetailsType, number>({
			query: id => ({
				url: `/species/details/${id}`,
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY
				}
			}),
			transformResponse: (res: PlantDetailsResponse) => transformPlantDetails(res)
		})
	})
});

export const { useGetPlantsQuery, useGetPlantsByNameQuery, useGetPlantsByIdQuery } = plantsApi;