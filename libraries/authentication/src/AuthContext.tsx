import { createContext } from 'react';

import { User } from './User';

type AuthContextValue = {
	showAuthDialog: () => void;
	hideAuthDialog: () => void;

	user?: User;
	signOut: () => void;

	signInWithEmailAndPassword: (email: string, password: string) => void;
	errorSignInWithEmailAndPassword?: Error;
	loadingSignInWithEmailAndPassword: boolean;

	createUserWithEmailAndPassword: (email: string, password: string) => void;
	errorCreateWithEmailAndPassword?: Error;
	loadingCreateWithEmailAndPassword: boolean;

	sendPasswordResetEmail: (email: string) => void;
	errorSendPasswordResetEmail?: Error;
	loadingSendPasswordResetEmail: boolean;
};

export const AuthContext = createContext<AuthContextValue>({
	showAuthDialog: () => {},
	hideAuthDialog: () => {},

	signOut: () => {},

	signInWithEmailAndPassword: (email, password) => {},
	loadingSignInWithEmailAndPassword: false,

	createUserWithEmailAndPassword: (email, password) => {},
	loadingCreateWithEmailAndPassword: false,

	sendPasswordResetEmail: (email) => {},
	loadingSendPasswordResetEmail: false,
});
