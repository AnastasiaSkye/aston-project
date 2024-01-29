import { useAuth } from 'entities/user';

import './styles.css';

export function Logout() {
	const { signOut } = useAuth();

	return (
		<button className='logout__button' onClick={signOut}>Logout</button>
	);
}