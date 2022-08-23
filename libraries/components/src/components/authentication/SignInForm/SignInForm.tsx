import React, { FormEvent } from 'react';

import { ErrorMessage, Input, InputGroup } from '@arcade/library-components';
import { useAuth } from '@arcade/library-authentication';
import { SignInFormProps } from './SignInForm.annotations';

export function SignInForm({ formId }: SignInFormProps): JSX.Element {
	const { signInWithEmailAndPassword, errorSignInWithEmailAndPassword, loadingSignInWithEmailAndPassword } = useAuth();

	const handleSignIn = (event: FormEvent) => {
		event.preventDefault();
		const elForm = event.target as HTMLFormElement;
		const elEmail = elForm.querySelector(`#${formId}_email`) as HTMLInputElement;
		const elPassword = elForm.querySelector(`#${formId}_password`) as HTMLInputElement;
		console.log({ event, elForm, elEmail, elPassword }, elEmail.value, elPassword.value);
		signInWithEmailAndPassword(elEmail.value, elPassword.value);
	};

	return (
		<form id={formId} onSubmit={handleSignIn}>
			{errorSignInWithEmailAndPassword && (
				<ErrorMessage>Sorry, we couldn't sign you in. Please check your email and password and try again.</ErrorMessage>
			)}

			<InputGroup
				inputId={`${formId}_email`}
				required={true}
				slotInput={
					<Input
						autoComplete='email'
						disabled={loadingSignInWithEmailAndPassword}
						id={`${formId}_email`}
						name='email'
						required
						type='email'
					/>
				}
				slotLabel='Email'
			/>
			<InputGroup
				inputId={`${formId}_password`}
				required={true}
				slotInput={
					<Input
						autoComplete='current-password'
						disabled={loadingSignInWithEmailAndPassword}
						id={`${formId}_password`}
						name='password'
						required
						type='password'
					/>
				}
				slotLabel='Password'
			/>
		</form>
	);
}
