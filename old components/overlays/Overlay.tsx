import React, { useEffect, useRef } from 'react';

import type { OverlayProps } from './Overlay.annotations';
import * as S from './Overlay.styled';

export function Overlay({ children, show = false, isModal = true, onClose, ...restProps }: OverlayProps): JSX.Element {
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!ref?.current) {
			return;
		}

		if (show) {
			if (isModal) {
				ref.current.showModal();
			} else {
				ref.current.show();
			}
		} else {
			ref.current.close();
		}
	}, [show]);

	return (
		<S.Overlay onCancel={onClose} ref={ref} {...restProps}>
			{children}
		</S.Overlay>
	);
}
