import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { AuthStatus, type User } from 'shared/config';

export interface UserState {
	user: User;
	authStatus: AuthStatus;
}

const initialState: UserState = {
	user: {
		id: '',
		email: ''
	},
	authStatus: AuthStatus.Loading
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userSignedUp(state, action: PayloadAction<User>) {
			state.user = action.payload;
			state.authStatus = AuthStatus.SignedIn;
		},
		userSignedIn(state, action: PayloadAction<User>) {
			state.user = action.payload;
			state.authStatus = AuthStatus.SignedIn;
		},
		userSignedOut(state) {
			state.user = initialState.user;
			state.authStatus = AuthStatus.SignedOut;
		}
	}
});

const { userSignedUp, userSignedIn, userSignedOut } = userSlice.actions;

export const slice = { userSignedUp, userSignedIn, userSignedOut };

export const userReducer = userSlice.reducer;