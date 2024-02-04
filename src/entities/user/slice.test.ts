import '@testing-library/jest-dom'

import { AuthStatus } from 'shared/config';

import { slice, userReducer } from './slice';

describe('userSlice', () => {
	test('userSignedUp', () => {
		expect(userReducer({
			user: {
				id: '',
				email: ''
			},
			authStatus: AuthStatus.Loading
		}, slice.userSignedUp({
			id: '1',
			email: 'user@mail.ru'
		}))).toEqual({
			user: {
				id: '1',
				email: 'user@mail.ru'
			},
			authStatus: AuthStatus.SignedIn
		})
	})

	test('userSignedIn', () => {
		expect(userReducer({
			user: {
				id: '',
				email: ''
			},
			authStatus: AuthStatus.Loading
		}, slice.userSignedIn({
			id: '2',
			email: 'user2@mail.ru'
		}))).toEqual({
			user: {
				id: '2',
				email: 'user2@mail.ru'
			},
			authStatus: AuthStatus.SignedIn
		})
	})

	test('userSignedOut', () => {
		expect(userReducer({
			user: {
				id: '2',
				email: 'user2@mail.ru'
			},
			authStatus: AuthStatus.SignedIn
		}, slice.userSignedOut())).toEqual({
			user: {
				id: '',
				email: ''
			},
			authStatus: AuthStatus.SignedOut
		})
	})
})