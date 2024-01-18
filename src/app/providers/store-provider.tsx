import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';

export const StoreProvider = (component: () => React.ReactNode) => () => (
	<Provider store={store}>{component()}</Provider>
);