import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'widgets/header';

export function BaseLayout() {
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

