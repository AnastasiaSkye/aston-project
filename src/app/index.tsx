import React from 'react';

import { AppRouter } from './router';
import { ThemeProvider, withProviders } from './providers';

import './styles/reset.css';
import './styles/index.css';

function App() {
	return (
		<ThemeProvider>
			<AppRouter />
		</ThemeProvider>
	);
}

export default withProviders(App);
