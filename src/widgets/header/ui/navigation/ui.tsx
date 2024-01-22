import { Logout } from 'features/auth';
import { useAuth } from 'entities/user';
import { AuthStatus } from 'shared/config';
import { Link } from 'shared/ui';

import { authNavigation, publicNavigation } from './config';

import './styles.css';

export function Navigation() {
	const { authStatus } = useAuth();

	return (
		<nav className='header__nav'>
			<ul>
				{authStatus === AuthStatus.SignedIn &&
					<>
						{authNavigation.map(el =>
							<li key={el.href}><Link href={el.href} text={el.text} /></li>
						)}
						<li><Logout /></li>
					</>
				}
				{authStatus === AuthStatus.SignedOut &&
					<>
						{publicNavigation.map(el =>
							<li key={el.href}><Link href={el.href} text={el.text}/></li>
						)}
					</>
				}
			</ul>
		</nav>
	);
}