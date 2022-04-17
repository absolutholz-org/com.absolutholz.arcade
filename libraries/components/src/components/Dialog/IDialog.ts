import { ReactNode } from 'react';

export interface IDialogProps {
	children: ReactNode;
	isModal?: boolean;
	isOpen?: boolean;
	slotButtonBar?: ReactNode;
	slotHeader?: ReactNode;
	slotFooter?: ReactNode;
}
