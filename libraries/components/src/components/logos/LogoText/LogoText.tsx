import * as S from './LogoText.styled';

export function LogoText({ ...restProps }): JSX.Element {
	return (
		<S.Wrapper {...restProps}>
			<S.Absolutholz>absolutholz</S.Absolutholz>
			<S.Arcade>Arcade</S.Arcade>
		</S.Wrapper>
	);
}
