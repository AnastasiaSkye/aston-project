import React, { FormEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from 'entities/user';
import { RouteName } from 'shared/config';
import { Button, Form, Input } from 'shared/ui';

import { isValidEmail, isValidPassword } from './lib';

interface Props {
	isLogin: boolean;
}

export function AuthForm({ isLogin }: Props) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailLabel, setEmailLabel] = useState<string>('');
	const [passwordLabel, setPasswordLabel] = useState<string>('');
	const [formError, setFormError] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const user = useAuth();

	const handleErrorEmail = useCallback((): void => {
		if (isValidEmail(email)) {
			setEmailError('');
		} else {
			setEmailError('Please enter a valid e-mail');
		}
	}, [email]);

	const handleErrorPassword = useCallback((): void => {
		if (isValidPassword(password)) {
			setPasswordError('');
		} else {
			setPasswordError('Passwords must have 8 characters or more');
		}
	}, [password]);


	const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value);
		e.target.value === '' ? setEmailLabel('') : setEmailLabel('Email');
	}, []);

	const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value);
		e.target.value === '' ? setPasswordLabel('') : setPasswordLabel('Password');
	}, []);

	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault();
			handleErrorEmail();
			handleErrorPassword();
			if (isValidEmail(email) && isValidPassword(password)) {
				setIsLoading(true);
				if (isLogin) {
					await user.signIn(email, password);
					navigate(RouteName.MAIN_PAGE);
				} else {
					await user.signUp(email, password);
					navigate(RouteName.MAIN_PAGE);
				}
			}
		} catch (error) {
			setIsLoading(false);
			if (error instanceof Error) {
				setFormError(error.message);
			} else {
				setFormError('unknown_error');
			}
		}
	}, [user, email, password, isLogin, handleErrorEmail, handleErrorPassword, navigate]);

	return (
		<Form onSubmit={handleSubmit} className='auth-form' error={formError} data-testid='auth-form'>
			<Input placeholder='Email' type='email' label={emailLabel}
				   onChange={handleChangeEmail} id='username'
				   onBlur={handleErrorEmail} error={emailError} />
			<Input placeholder='Password' type='password' label={passwordLabel}
				   onChange={handleChangePassword} id='password'
				   onBlur={handleErrorPassword} error={passwordError} />
			<Button className={`${isLoading && 'loading'}`} type='submit'>
				{isLoading ? 'Loading...' : (isLogin ? 'Sign in' : 'Sign up')}
			</Button>
		</Form>
	);
}