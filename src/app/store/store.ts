import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user/slice';
import { favoritesApi, plantsApi } from 'shared/api';

import { signedInMiddleware } from './middleware';

export const store = configureStore({
	reducer: {
		user: userReducer,
		[plantsApi.reducerPath]: plantsApi.reducer,
		[favoritesApi.reducerPath]: favoritesApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			plantsApi.middleware,
			favoritesApi.middleware,
			signedInMiddleware.middleware
		])
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

