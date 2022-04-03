import { ILogoInlineText } from './ILogoInlineText';
import * as S from './LogoInlineText.styled';

export function LogoInlineText({ ...restProps }: ILogoInlineText): JSX.Element {
	return (
		<S.LogoInlineText {...restProps}>
			absolutholz <S.LogoInlineTextArcade>Arcade</S.LogoInlineTextArcade>
		</S.LogoInlineText>
	);
}
