import React from 'react';

import { AppRouter } from './router';
import { withProviders } from './providers';

import './styles/reset.css';
import './styles/index.css';

function App() {
	return (
		<AppRouter />
	);
}

export default withProviders(App);
