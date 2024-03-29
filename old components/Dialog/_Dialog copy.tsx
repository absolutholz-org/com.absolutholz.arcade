import { useEffect, useRef } from 'react';

import type { DialogProps } from './_Dialog.annotations';
import * as S from './_Dialog.styled';

export function Dialog({
	children,
	onClose,
	icon,
	isModal = true,
	shouldShow = false,
}: DialogProps): JSX.Element {
	const ref = useRef<HTMLDialogElement>(null);
	const Component = icon ? S.DialogWithIcon : S.Dialog;

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
			event.preventDefault();
			onClose();
		}

		ref.current?.addEventListener('cancel', handleDialogCancel);

		return () => {
			ref.current?.removeEventListener('cancel', handleDialogCancel);
		};
	}, []);

	return (
		<Component ref={ref}>
			{icon && (
				<S.Dialog_IconShell>
					{/* <S.Dialog_Icon path={icon} title='icon' /> */}
				</S.Dialog_IconShell>
			)}
			<S.Dialog_Content>{children}</S.Dialog_Content>
		</Component>
	);
}
