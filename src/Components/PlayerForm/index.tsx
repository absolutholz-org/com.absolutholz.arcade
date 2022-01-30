import { FormEvent, useRef } from "react";

import { IPlayerFormProps } from './IPlayerForm';

export function PlayerForm ({ formID, onSubmit }: IPlayerFormProps): JSX.Element {
    const nameRef = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (nameRef.current?.value) {
            onSubmit(nameRef.current?.value);
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor={ `${ formID }_name` }>
                <div>Name</div>
                <input id={ `${ formID }_name` } ref={ nameRef } required type='text' />
            </label>
            <button>Save</button>
        </form>
    )
}
