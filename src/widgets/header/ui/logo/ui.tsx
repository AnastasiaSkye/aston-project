import { NavLink } from 'react-router-dom';

import { RouteName } from 'shared/config';

import './styles.css';

export function Logo() {
	return (
		<div className='header__logo'>
			<NavLink to={RouteName.MAIN_PAGE}>Plants Gallery</NavLink>
		</div>
	);
}