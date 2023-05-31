import * as S from './LogoText.styled';

export function LogoText({ ...restProps }): JSX.Element {
	return (
		<S.Logo {...restProps}>
			<S.LogoAbsolutholz />
			<S.LogoArcade>Arcade</S.LogoArcade>
		</S.Logo>
	);
}
