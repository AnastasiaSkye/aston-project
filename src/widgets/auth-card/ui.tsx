import React from 'react';

import { AuthForm } from 'features/auth';
import { RouteName } from 'shared/config';
import { Link } from 'shared/ui';

import './styles.css';

interface Props {
	isLogin: boolean;
}

export function AuthCard({ isLogin }: Props) {
	return (
		<div className='auth-card' data-testid='auth-card'>
			<h1>{isLogin ? 'Login' : 'Registration'}</h1>
			<AuthForm isLogin={isLogin} />
			<div className='auth-card__div'>
				<span>{isLogin ? 'You don\'t have an account?' : 'Already registered?'}</span>
				<Link href={isLogin ? RouteName.REGISTRATION_PAGE : RouteName.LOGIN_PAGE}
					  text={isLogin ? 'Sign up' : 'Sign in'} />
			</div>
		</div>
	);
}