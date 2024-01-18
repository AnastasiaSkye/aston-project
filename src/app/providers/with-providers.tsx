import compose from 'compose-function';

import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = compose(StoreProvider, RouterProvider);