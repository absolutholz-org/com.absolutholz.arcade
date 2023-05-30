import { useEffect, useRef } from 'react';

import type { DialogProps } from './_Dialog.annotations';
import * as S from './_Dialog.styled';

export function Dialog({
	children,
	isModal = true,
	shouldShow = false,
	icon,
	onClose,
}: DialogProps): JSX.Element {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!ref?.current) {
			return;
		}

		if (shouldShow) {
			if (isModal) {
				ref.current.showModal();
			} else {
				ref.current.show();
			}
		} else {
			ref.current.close();
		}
	}, [shouldShow]);

	useEffect(() => {
		function handleDialogCancel(event: Event): void {
			debugger;
			event.preventDefault();
			onClose();
		}

		ref.current?.addEventListener('cancel', handleDialogCancel);

		return () => {
			ref.current?.removeEventListener('cancel', handleDialogCancel);
		};
	}, []);

	return (
		<S.Dialog ref={ref}>
			<S.Dialog_IconShell>
				<S.Dialog_Icon path={icon} title='icon' />
			</S.Dialog_IconShell>
			{children}
		</S.Dialog>
	);
}
