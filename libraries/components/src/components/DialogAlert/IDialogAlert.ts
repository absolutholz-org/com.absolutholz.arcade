import { ReactNode } from 'react';
import { IDialogProps } from '../Dialog';

export interface IDialogAlertProps extends IDialogProps {
	onConfirm?: () => void;
	slotConfirmButton?: ReactNode;
}
