import { BannerProps } from './_Banner.annotations';
import * as S from './_Banner.styled';

export function Banner({ children }: BannerProps): JSX.Element {
	return <S.Banner>{children}</S.Banner>;
}
