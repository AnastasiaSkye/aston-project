import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PlantDetailsType, PlantType } from 'shared/config';
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
			transformResponse: transformPlants
		}),
		getPlantsByName: build.query<PlantType[], string>({
			query: name => ({
				url: '/species-list',
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY,
					q: name
				}
			}),
			transformResponse: transformPlants
		}),
		getPlantsById: build.query<PlantDetailsType, number>({
			query: id => ({
				url: `/species/details/${id}`,
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY
				}
			}),
			transformResponse: transformPlantDetails
		})
	})
});

export const { useGetPlantsQuery, useGetPlantsByNameQuery, useGetPlantsByIdQuery } = plantsApi;