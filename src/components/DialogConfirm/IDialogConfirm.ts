import { ReactNode } from 'react';
import { IDialogAlertProps } from '../DialogAlert';

export interface IDialogConfirmProps extends IDialogAlertProps {
	onCancel?: () => void;
	slotCancelButton?: ReactNode;
}
