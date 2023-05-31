import { FormFooterProps } from './FormFooter.annotations';
import * as S from './FormFooter.styled';

export function FormFooter({ children, ...props }: FormFooterProps): JSX.Element {
	return <S.FormFooter {...props}>{children}</S.FormFooter>;
}
