import { useState } from 'react';

import { useAuth } from '@arcade/library-authentication';

import { ForgottenPasswordForm } from '../ForgottenPasswordForm';
import { SignInForm } from '../SignInForm';
import { SignUpForm } from '../SignUpForm';
import type { AuthDialogProps } from './AuthDialog.annotations';
import { Dialog } from '../../overlays/Dialog';
import { ButtonGroup } from '../../buttons/ButtonGroup';
import { Button } from '../../buttons/Button';
import * as S from './AuthDialog.styled';

export function AuthDialog({ show = false, onClose }: AuthDialogProps): JSX.Element {
	const { loadingCreateWithEmailAndPassword, loadingSignInWithEmailAndPassword, loadingSendPasswordResetEmail } = useAuth();

	const [visibleForm, setVisibleForm] = useState<'signin' | 'signup' | 'password'>('signin');

	const handleClose = () => {
		setVisibleForm('signin');
		onClose();
	};

	return (
		<Dialog
			onClose={handleClose}
			show={show}
			slotHeader={'Welcome Visitor'}
			slotFooter={
				<ButtonGroup>
					{visibleForm === 'signin' && (
						<>
							<S.AuthDialogSecondaryButton
								disabled={loadingSignInWithEmailAndPassword}
								onClick={() => setVisibleForm('signup')}
								type='button'
								variant='text'>
								Not a player yet?
							</S.AuthDialogSecondaryButton>
							<Button disabled={loadingSignInWithEmailAndPassword} form='sign-in' type='submit'>
								Sign In
							</Button>
						</>
					)}
					{visibleForm === 'signup' && (
						<Button disabled={loadingCreateWithEmailAndPassword} form='sign-up' type='submit'>
							Sign Up
						</Button>
					)}
					{visibleForm === 'password' && (
						<Button disabled={loadingSendPasswordResetEmail} form='password-forgotten' type='submit'>
							Reset Password
						</Button>
					)}
				</ButtonGroup>
			}>
			{visibleForm === 'signin' && (
				<>
					<SignInForm formId='sign-in' />
					<S.AuthDialogForgottenPasswordButton onClick={() => setVisibleForm('password')} type='button' variant='text'>
						Forgot your password?
					</S.AuthDialogForgottenPasswordButton>
				</>
			)}
			{visibleForm === 'signup' && <SignUpForm formId='sign-up' />}
			{visibleForm === 'password' && <ForgottenPasswordForm formId='password-forgotten' />}
		</Dialog>
	);
}
