import { useCallback } from 'react';

import { useAuth } from 'entities/user';

import './styles.css';

export function Logout() {
	const { signOut } = useAuth();

	const logout = useCallback(async (): Promise<void> => {
		await signOut();
	}, [signOut]);

	return (
		<button className='logout__button' onClick={logout}>Logout</button>
	);
}