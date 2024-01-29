import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/user/slice';
import { plantsApi } from 'shared/api';

export const store = configureStore({
	reducer: {
		user: userReducer,
		[plantsApi.reducerPath]: plantsApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(plantsApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

