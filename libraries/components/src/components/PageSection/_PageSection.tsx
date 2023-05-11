import { PageSectionProps } from './_PageSection.types';
import * as S from './_PageSection.styled';

export function PageSection({ children }: PageSectionProps): JSX.Element {
	return <S.PageSection>{children}</S.PageSection>;
}
