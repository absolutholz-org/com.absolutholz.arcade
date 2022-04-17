import { FormEvent, useRef } from 'react';
import { Input } from '../formElements/Input';
import { InputGroup } from '../formElements/InputGroup';

import { IPlayerFormProps } from './IPlayerForm';

export function PlayerForm({
	formID,
	onSubmit,
}: IPlayerFormProps): JSX.Element {
	const nameRef = useRef<HTMLInputElement>(null);
	const inputID = `${formID}_name`;

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		if (nameRef.current?.value) {
			onSubmit(nameRef.current?.value);
		}
	};

	return (
		<form id={formID} onSubmit={handleSubmit}>
			<InputGroup
				slotLabel='Name'
				slotInput={
					<Input id={inputID} ref={nameRef} required type='text' />
				}
				inputId={inputID}
			/>
		</form>
	);
}
