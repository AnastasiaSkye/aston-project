export interface User {
	id: string;
	email: string;
}

export enum AuthStatus {
	Loading = 'Loading',
	SignedIn = 'SignedIn',
	SignedOut = 'SignedOut',
}