import React from 'react';

import Routing from '../pages/routing/routing';

import { withProviders } from './providers';
import './styles/reset.css'
import './index.css'

function App() {
	return (
		<Routing />
	);
}

export default withProviders(App);
