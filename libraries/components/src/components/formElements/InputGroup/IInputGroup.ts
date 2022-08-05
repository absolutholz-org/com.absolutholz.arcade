import { ReactNode } from 'react';

export interface IInputGroup {
	slotLabel: ReactNode;
	slotInput: ReactNode;
	inputId: string;
	required?: boolean;
	helpText?: ReactNode;
}
