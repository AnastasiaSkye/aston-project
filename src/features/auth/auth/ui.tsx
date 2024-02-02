import React, { FormEvent, useCallback, useState } from 'react';
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
	const [formError, setFormError] = useState<string>('');
	const [emailError, setEmailError] = useState<string>('');
	const [passwordError, setPasswordError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const user = useAuth();

	const emailValid = useCallback((): boolean =>
		!!email.toLowerCase().match(emailRegular)
	, [email]);

	const passwordValid = useCallback((): boolean =>
		password.length >= 8
	, [password]);

	const handleErrorEmail = useCallback((): void => {
		if (emailValid()) {
			setEmailError('');
		} else {
			setEmailError('Please enter a valid e-mail');
		}
	}, [emailValid]);

	const handleErrorPassword = useCallback((): void => {
		if (passwordValid()) {
			setPasswordError('');
		} else {
			setPasswordError('Passwords must have 8 characters or more');
		}
	}, [passwordValid]);


	const handleChangeEmail = useCallback((value: string): void => {
		setEmail(value);
		value === '' ? setEmailLabel('') : setEmailLabel('Email');
	}, []);

	const handleChangePassword = useCallback((value: string): void => {
		setPassword(value);
		value === '' ? setPasswordLabel('') : setPasswordLabel('Password');
	}, []);

	const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
		try {
			e.preventDefault();
			handleErrorEmail();
			handleErrorPassword();
			if (emailValid() && passwordValid()) {
				setIsLoading(true);
				if (isLogin) {
					await user.signIn(email, password);
					navigate(RouteName.MAIN_PAGE);
				} else {
					await user.signUp(email, password);
					navigate(RouteName.LOGIN_PAGE);
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
	}, [user, email, password, emailValid, passwordValid, isLogin, handleErrorEmail, handleErrorPassword, navigate]);

	return (
		<Form onSubmit={handleSubmit} className='auth-form' error={formError}>
			<Input placeholder='Email' type='email' label={emailLabel}
				   handleChange={handleChangeEmail}
				   onBlur={handleErrorEmail} error={emailError} />
			<Input placeholder='Password' type='password' label={passwordLabel}
				   handleChange={handleChangePassword}
				   onBlur={handleErrorPassword} error={passwordError} />
			<Button className={`${isLoading && 'loading'}`} type='submit'>
				{isLoading ? 'Loading...' : (isLogin ? 'Sign in' : 'Sign up')}
			</Button>
		</Form>
	);
}