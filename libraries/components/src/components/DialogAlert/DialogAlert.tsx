import { Dialog } from '../Dialog';
import { Button } from '../buttons/Button';

import { IDialogAlertProps } from './IDialogAlert';

export function DialogAlert({
	children,
	onConfirm,
	slotConfirmButton = 'OK',
	slotButtonBar,
	...props
}: IDialogAlertProps): JSX.Element {
	const handleConfirm = () => {
		if (onConfirm) {
			onConfirm();
		}
	};

	return (
		<Dialog
			slotButtonBar={
				<>
					{slotButtonBar}
					<Button inline={true} onClick={handleConfirm}>
						{slotConfirmButton}
					</Button>
				</>
			}
			{...props}>
			{children}
		</Dialog>
	);
}
