import React from 'react';

import { ThemeButton } from 'features/change-theme';

import { Logo } from './logo';
import { Search } from './search';
import { Navigation } from './navigation';

import './styles.css';

export function Header() {
	return (
		<header className='header' data-testid='header'>
			<div className='container'>
				<div className='header__row'>
					<Logo />
					<Search />
					<Navigation />
					<ThemeButton />
				</div>
			</div>
		</header>
	);
}