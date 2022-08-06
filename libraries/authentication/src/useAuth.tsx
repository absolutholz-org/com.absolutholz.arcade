import { useContext } from 'react';

import { AuthContext } from './AuthContext';

export function useAuth() {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	const {
		showAuthDialog,
		hideAuthDialog,

		user,
		signOut,

		signInWithEmailAndPassword,
		errorSignInWithEmailAndPassword,
		loadingSignInWithEmailAndPassword,

		createUserWithEmailAndPassword,
		errorCreateWithEmailAndPassword,
		loadingCreateWithEmailAndPassword,
	} = context;

	return {
		showAuthDialog,
		hideAuthDialog,

		user,
		signOut,

		signInWithEmailAndPassword,
		errorSignInWithEmailAndPassword,
		loadingSignInWithEmailAndPassword,

		createUserWithEmailAndPassword,
		errorCreateWithEmailAndPassword,
		loadingCreateWithEmailAndPassword,
	};
}
