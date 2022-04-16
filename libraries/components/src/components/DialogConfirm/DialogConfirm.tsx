import { Button } from '../buttons/Button';

import { IDialogConfirmProps } from './IDialogConfirm';
import { ButtonVariant } from '../buttons/Button/IButton';
import { DialogAlert } from '../DialogAlert';

export function DialogConfirm({
	children,
	onCancel,
	slotCancelButton = 'Cancel',
	...props
}: IDialogConfirmProps): JSX.Element {
	const handleCancel = () => {
		if (onCancel) {
			onCancel();
		}
	};

	return (
		<DialogAlert
			slotButtonBar={
				<>
					<Button
						inline={true}
						onClick={handleCancel}
						variant={ButtonVariant.Outlined}>
						{slotCancelButton}
					</Button>
				</>
			}
			{...props}>
			{children}
		</DialogAlert>
	);
}
