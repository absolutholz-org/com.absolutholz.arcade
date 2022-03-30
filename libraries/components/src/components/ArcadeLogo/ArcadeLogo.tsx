import * as S from './ArcadeLogo.styled';

export function ArcadeLogo({ ...props }): JSX.Element {
	return (
		<S.ArcadeLogo {...props}>
			<S.Absolutholz>absolutholz</S.Absolutholz>
			<S.Arcade>Arcade</S.Arcade>
		</S.ArcadeLogo>
	);
}
