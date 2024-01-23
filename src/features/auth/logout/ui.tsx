import { useNavigate } from 'react-router-dom';

import { useAuth } from 'entities/user';
import { RouteName } from 'shared/config';

import './styles.css';

export function Logout() {
	const navigate = useNavigate();
	const user = useAuth();

	const logout = async () => {
		await user.signOut()
		navigate(RouteName.MAIN_PAGE)
	}

	return (
		<button className='logout__button' onClick={logout}>Logout</button>
	);
}