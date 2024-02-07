import { emailRegular } from 'shared/config';

export const isValidEmail = (email: string): boolean =>
	!!email.toLowerCase().match(emailRegular);

export const isValidPassword = (password: string): boolean =>
	password.length >= 8;