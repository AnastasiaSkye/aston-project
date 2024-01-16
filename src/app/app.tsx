import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from '../pages/main/main';
import './styles/reset.css'
import './styles/common.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
