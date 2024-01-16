import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('../../widgets/layouts/layout'),);
const Main = lazy(() => import('../main/main'));

export default function Routing() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main />} />
			</Route>
		</Routes>
	);
}