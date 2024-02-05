import React from 'react';

import { AppRouter } from './router';
import { FavoritesProvider, ThemeProvider, withProviders } from './providers';

import './styles/reset.css';
import './styles/index.css';

function App() {
	return (
		<ThemeProvider>
			<FavoritesProvider>
				<AppRouter />
			</FavoritesProvider>
		</ThemeProvider>
	);
}

export default withProviders(App);
