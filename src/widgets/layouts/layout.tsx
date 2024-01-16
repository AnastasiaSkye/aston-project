import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../header/header';

function Layout() {
	return (
		<>
			<Header />
			<main>
				<div className='container'>
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default Layout;