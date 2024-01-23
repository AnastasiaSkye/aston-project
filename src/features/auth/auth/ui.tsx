import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'entities/user';
import { emailRegular, RouteName } from 'shared/config';
import { Button, Form, Input } from 'shared/ui';

interface Props {
	isLogin: boolean;
}

export function AuthForm({ isLogin }: Props) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailLabel, setEmailLabel] = useState<string>('');
	const [passwordLabel, setPasswordLabel] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const user = useAuth();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!handleError('All')) {
			setIsLoading(true);

			if (isLogin) {
				await user.signIn(email, password);
				navigate(RouteName.MAIN_PAGE);
			} else {
				await user.signUp(email, password);
				navigate(RouteName.LOGIN_PAGE);
			}
		}
	};

	const handleChange = (type: string, value: string) => {
		if (type === 'Email') {
			setEmail(value);
			value === '' ? setEmailLabel('') : setEmailLabel(type);
		} else if (type === 'Password') {
			setPassword(value);
			value === '' ? setPasswordLabel('') : setPasswordLabel(type);
		}
	};

	const handleError = (type: string) => {
		if (type === 'Email' || type === 'All') {
			if (email.toLowerCase().match(emailRegular)) {
				setEmailError('');
			} else {
				setEmailError('Please enter a valid e-mail');
			}
		}
		if (type === 'Password' || type === 'All') {
			if (password.length >= 8) {
				setPasswordError('');
			} else {
				setPasswordError('Passwords must have 8 characters or more');
			}
		}
		return !(email.toLowerCase().match(emailRegular) && password.length >= 8);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Input placeholder='Email' type='email' label={emailLabel}
				   onChange={(e) => handleChange('Email', e.target.value)}
				   onBlur={() => handleError('Email')} error={emailError} />
			<Input placeholder='Password' type='password' label={passwordLabel}
				   onChange={(e) => handleChange('Password', e.target.value)}
				   onBlur={() => handleError('Password')} error={passwordError} />
			<Button className={`${isLoading && 'loading'}`} type='submit'>
				{isLoading ? 'Loading...' : (isLogin ? 'Sign in' : 'Sign up')}
			</Button>
		</Form>
	);
}