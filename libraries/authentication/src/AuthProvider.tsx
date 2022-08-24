import { ReactNode, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut as logOut } from 'firebase/auth';
import {
	useAuthState,
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
	useUpdateProfile,
} from 'react-firebase-hooks/auth';

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

	const [sendEmailVerification, loadingSendEmailVerification, errorSendEmailVerification] = useSendEmailVerification(auth);

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

	const [updateProfile, loadingUpdateProfile, errorUpdateProfile] = useUpdateProfile(auth);

	const [sendPasswordResetEmail, loadingSendPasswordResetEmail, errorSendPasswordResetEmail] = useSendPasswordResetEmail(auth);

	useEffect(() => {
		console.log({ userCreateWithEmailAndPassword });
		if (userCreateWithEmailAndPassword?.user.email) {
			const [displayName] = userCreateWithEmailAndPassword.user.email.split('@');
			updateProfile({ displayName });
		}
		sendEmailVerification();
	}, [userCreateWithEmailAndPassword]);

	useEffect(() => {
		console.log({ authUser });
		if (authUser !== undefined && authUser !== null) {
			const { email, uid, displayName } = authUser;
			setUser({
				displayName,
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

				sendPasswordResetEmail,
				loadingSendPasswordResetEmail,
				errorSendPasswordResetEmail,
			}}>
			{children}
			<AuthDialog show={showAuthDialog} onClose={() => setShowAuthDialog(false)} />
		</AuthContext.Provider>
	);
};
