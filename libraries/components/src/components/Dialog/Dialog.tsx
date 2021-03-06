import { useEffect, useRef } from 'react';

import * as S from './Dialog.styled';
import { IDialogProps } from './IDialog';

export function Dialog({
	children,
	isOpen = false,
	isModal = true,
	slotHeader,
	slotFooter,
	slotButtonBar,
}: IDialogProps): JSX.Element {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!ref?.current) {
			return;
		}

		if (isOpen) {
			if (isModal) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ref.current.showModal();
			} else {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ref.current.open();
			}
		} else {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			ref.current.close();
		}
	}, [isOpen]);

	return (
		<S.Dialog ref={ref}>
			{slotHeader && <S.Header>{slotHeader}</S.Header>}

			{children}
			{slotFooter && <S.Footer>{slotFooter}</S.Footer>}
			{slotButtonBar && <S.ButtonBar>{slotButtonBar}</S.ButtonBar>}
		</S.Dialog>
	);
}
