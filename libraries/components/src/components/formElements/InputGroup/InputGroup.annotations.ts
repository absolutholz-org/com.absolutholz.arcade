import { ReactNode } from 'react';

export interface InputGroupProps {
	slotLabel: ReactNode;
	slotInput: ReactNode;
	inputId: string;
	required?: boolean;
	helpText?: ReactNode;
}
