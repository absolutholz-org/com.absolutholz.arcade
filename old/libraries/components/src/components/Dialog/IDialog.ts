import { ReactNode } from 'react';

export interface IDialogProps {
	children: ReactNode;
	isOpen?: boolean;
	isModal?: boolean;
	slotFooter?: ReactNode;
	slotButtonBar?: ReactNode;
}
