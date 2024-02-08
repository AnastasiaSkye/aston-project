import { RootState } from 'app/store';

export const getUser = (state : RootState)  => state.user.user
export const getAuthStatus = (state : RootState)  => state.user.authStatus