import { createListenerMiddleware } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

import { slice } from 'entities/user';

export const signedInMiddleware = createListenerMiddleware();

signedInMiddleware.startListening({
	actionCreator: slice.userSignedIn,
	effect: (action) => {
		toast.success(`User signed in: ${action.payload.email}`);
	}
});