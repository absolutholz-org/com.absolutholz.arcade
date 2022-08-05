import React, { useEffect, useState } from 'react';

import {
	Button,
	ButtonGroup,
	ButtonVariant,
	Dialog,
} from '@arcade/library-components';

import { SignInForm } from '../SignInForm';
import { SignUpForm } from '../SignUpForm';
import { useAuth } from '../../useAuth';
import type { IAuthDialog } from './IAuthDialog';

export function AuthDialog({
	show = false,
	onClose,
}: IAuthDialog): JSX.Element {
	const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
	const {
		user,
		loadingCreateWithEmailAndPassword,
		loadingSignInWithEmailAndPassword,
	} = useAuth();

	useEffect(() => {
		if (
			user !== undefined &&
			!loadingCreateWithEmailAndPassword &&
			!loadingSignInWithEmailAndPassword
		) {
		}
	}, [
		user,
		loadingCreateWithEmailAndPassword,
		loadingSignInWithEmailAndPassword,
	]);

	return (
		<Dialog
			onClose={onClose}
			show={show}
			slotHeader={'Welcome Visitor'}
			slotFooter={
				<ButtonGroup>
					{!showSignUpForm && (
						<>
							<Button
								disabled={loadingSignInWithEmailAndPassword}
								onClick={() => setShowSignUpForm(true)}
								type='button'
								variant={ButtonVariant.Text}>
								Sign Up
							</Button>
							<Button
								disabled={loadingSignInWithEmailAndPassword}
								form='sign-in'
								type='submit'>
								Sign In
							</Button>
						</>
					)}
					{showSignUpForm && (
						<>
							<Button
								disabled={loadingCreateWithEmailAndPassword}
								onClick={() => setShowSignUpForm(false)}
								type='button'
								variant={ButtonVariant.Text}>
								Sign In
							</Button>
							<Button
								disabled={loadingCreateWithEmailAndPassword}
								form='sign-up'
								type='submit'>
								Sign Up
							</Button>
						</>
					)}
				</ButtonGroup>
			}>
			{!showSignUpForm && <SignInForm formId='sign-in' />}
			{showSignUpForm && <SignUpForm formId='sign-up' />}
		</Dialog>
	);
}
