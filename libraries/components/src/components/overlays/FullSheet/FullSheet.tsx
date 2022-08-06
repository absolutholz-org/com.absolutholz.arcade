import React from 'react';

import * as S from './FullSheet.styled';
import { IFullSheet } from './IFullSheet';

export function FullSheet({
	children,
	show,
	isModal,
}: IFullSheet): JSX.Element {
	return (
		<S.FullSheet show={show} isModal={isModal}>
			{children}
		</S.FullSheet>
	);
}
