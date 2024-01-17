import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouteName } from 'shared/config';
import { Link } from 'shared/ui';

import { authNavigation, publicNavigation } from './config';

import './styles.css';

export function Navigation() {
	// TODO: заменить когда будет реализована авторизация
	const [isAuthorized, setIsAuthorized] = useState(true);
	const navigate = useNavigate();

	// TODO: перенести Logout в features/auth/logout, когда isAuthorized будет храниться в контексте
	const logout = () => {
		setIsAuthorized(!isAuthorized)
		navigate(RouteName.MAIN_PAGE)
	}

	return (
		<nav className='header__nav'>
			<ul>
				{isAuthorized ?
					<>
						{authNavigation.map(el =>
							<li><Link href={el.href} text={el.text}/></li>
						)}
						<li><button onClick={logout}>Logout</button></li>
					</>
					:
					<>
						{publicNavigation.map(el =>
							<li><Link href={el.href} text={el.text}/></li>
						)}
					</>
				}
			</ul>
		</nav>
	);
}