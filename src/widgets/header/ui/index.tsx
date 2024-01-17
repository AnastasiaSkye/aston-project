import React from 'react';

import { Logo } from './logo';
import { Search } from './search';
import { Navigation } from './navigation';

import './styles.css';

export function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__row'>
					<Logo />
					<Search />
					<Navigation />
				</div>
			</div>
		</header>
	);
}