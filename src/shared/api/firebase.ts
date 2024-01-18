import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { FirebaseConfig } from 'shared/config';

const app = initializeApp(FirebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
