import { FormEvent } from 'react';

import { ErrorMessage, Input, InputGroup } from '@arcade/library-components';
import { useAuth } from '@arcade/library-authentication';

import { ForgottenPasswordFormProps } from './ForgottenPasswordForm.annotations';

export function ForgottenPasswordForm({ formId }: ForgottenPasswordFormProps): JSX.Element {
	const { sendPasswordResetEmail, loadingSendPasswordResetEmail, errorSendPasswordResetEmail } = useAuth();

	const handleCreateUser = (event: FormEvent) => {
		event.preventDefault();
		const elForm = event.target as HTMLFormElement;
		const elEmail = elForm.querySelector(`#${formId}_email`) as HTMLInputElement;
		sendPasswordResetEmail(elEmail.value);
	};

	return (
		<form id={formId} onSubmit={handleCreateUser}>
			{errorSendPasswordResetEmail && (
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
						disabled={loadingSendPasswordResetEmail}
						id={`${formId}_email`}
						name='email'
						required
						type='email'
					/>
				}
				slotLabel='Email'
			/>
		</form>
	);
}
