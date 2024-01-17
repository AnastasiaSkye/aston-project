import compose from 'compose-function';

import { RouterProviders } from './router-providers';
import { StoreProviders } from './store-providers';

export const withProviders = compose(StoreProviders, RouterProviders);