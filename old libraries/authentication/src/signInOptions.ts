import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const signInOptions = [
	firebase.auth.EmailAuthProvider.PROVIDER_ID,
	firebase.auth.GoogleAuthProvider.PROVIDER_ID,
];
