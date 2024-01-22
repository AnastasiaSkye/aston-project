import { type User } from 'shared/config';
import { useAppDispatch } from 'shared/lib';

import { slice } from './slice';

export const useRedux = () => {
	const dispatch = useAppDispatch();
	const userSignedUp = (user: User): void => {
		dispatch(slice.userSignedUp(user));
	}
	const userSignedIn = (user: User): void => {
		dispatch(slice.userSignedIn(user));
	}
	const userSignedOut = (): void => {
		dispatch(slice.userSignedOut());
	}
	return {
		userSignedUp,
		userSignedIn,
		userSignedOut
	}
};