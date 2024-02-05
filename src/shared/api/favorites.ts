import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { PlantType } from 'shared/config';
import { transformPlantDetailsToPlant } from 'shared/lib';

export const favoritesApi = createApi({
	baseQuery: fetchBaseQuery({
		method: 'GET',
		baseUrl: process.env.REACT_APP_PLANTS_API_HOST
	}),
	reducerPath: 'favoritesApi',
	endpoints: build => ({
		getPlantById: build.query<PlantType, number>({
			query: id => ({
				url: `/species/details/${id}`,
				params: {
					key: process.env.REACT_APP_PLANTS_API_KEY
				}
			}),
			transformResponse: transformPlantDetailsToPlant
		})
	})
});

export const { useGetPlantByIdQuery } = favoritesApi;