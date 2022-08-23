import { ReactNode, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut as logOut } from 'firebase/auth';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { firebaseConfig } from './firebaseConfig';
import { AuthContext } from './AuthContext';
import type { User } from './User';
import { AuthDialog } from '@arcade/library-components';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const signOut = () => {
	logOut(auth);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<undefined | User>(undefined);
	const [showAuthDialog, setShowAuthDialog] = useState(false);

	const [authUser, authLoading, authError] = useAuthState(auth);

	const [
		createUserWithEmailAndPassword,
		userCreateWithEmailAndPassword,
		loadingCreateWithEmailAndPassword,
		errorCreateWithEmailAndPassword,
	] = useCreateUserWithEmailAndPassword(auth);

	const [
		signInWithEmailAndPassword,
		userSignInWithEmailAndPassword,
		loadingSignInWithEmailAndPassword,
		errorSignInWithEmailAndPassword,
	] = useSignInWithEmailAndPassword(auth);

	// useEffect(() => {
	// 	console.log('update user', {
	// 		authUser,
	// 		userCreateWithEmailAndPassword,
	// 		userSignInWithEmailAndPassword,
	// 	});
	// }, [
	// 	authUser,
	// 	userCreateWithEmailAndPassword,
	// 	userSignInWithEmailAndPassword,
	// ]);

	useEffect(() => {
		if (authUser !== undefined && authUser !== null) {
			const { email, uid } = authUser;
			setUser({
				email,
				uid,
			});
		} else {
			setUser(undefined);
		}
		setShowAuthDialog(false);
	}, [authUser]);

	return (
		<AuthContext.Provider
			value={{
				showAuthDialog: () => setShowAuthDialog(true),
				hideAuthDialog: () => setShowAuthDialog(false),

				user,
				signOut,

				signInWithEmailAndPassword,
				errorSignInWithEmailAndPassword,
				loadingSignInWithEmailAndPassword,

				createUserWithEmailAndPassword,
				errorCreateWithEmailAndPassword,
				loadingCreateWithEmailAndPassword,
			}}>
			{children}
			<AuthDialog show={showAuthDialog} onClose={() => setShowAuthDialog(false)} />
		</AuthContext.Provider>
	);
};
