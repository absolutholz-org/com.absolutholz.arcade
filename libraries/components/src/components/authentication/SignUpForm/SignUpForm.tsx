import { FormEvent } from 'react';

import { ErrorMessage, Input, InputGroup } from '@arcade/library-components';
import { useAuth } from '@arcade/library-authentication';
import { SignUpFormProps } from './SignUpForm.annotations';

export function SignUpForm({ formId }: SignUpFormProps): JSX.Element {
	const { createUserWithEmailAndPassword, errorCreateWithEmailAndPassword, loadingCreateWithEmailAndPassword } = useAuth();

	const handleCreateUser = (event: FormEvent) => {
		event.preventDefault();
		const elForm = event.target as HTMLFormElement;
		const elEmail = elForm.querySelector(`#${formId}_email`) as HTMLInputElement;
		const elPassword = elForm.querySelector(`#${formId}_password`) as HTMLInputElement;
		console.log({ event }, elForm, elEmail, elPassword);
		createUserWithEmailAndPassword(elEmail.value, elPassword.value);
	};

	return (
		<form id={formId} onSubmit={handleCreateUser}>
			{errorCreateWithEmailAndPassword && (
				<ErrorMessage>
					Sorry, we couldn't create an account. Please check your email and password and try again.
				</ErrorMessage>
			)}

			<InputGroup
				inputId={`${formId}_email`}
				required={true}
				slotInput={
					<Input
						autoComplete='email'
						disabled={loadingCreateWithEmailAndPassword}
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
						autoComplete='new-password'
						disabled={loadingCreateWithEmailAndPassword}
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
