import React from 'react';

import * as S from './ErrorMessage.styled';
import { IErrorMessage } from './IErrorMessage';

export function ErrorMessage({ children }: IErrorMessage): JSX.Element {
	return <S.ErrorMessage>{children}</S.ErrorMessage>;
}
