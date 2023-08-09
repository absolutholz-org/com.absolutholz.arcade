import * as S from './_LogoArcade.styled';
import { ILogoArcade } from './_LogoArcade.types';

export function LogoArcade({ isSingleLine = false }: ILogoArcade): JSX.Element {
	return (
		<S.LogoArcade>
			<S.LogoArcade_Absolutholz relativeSize='s' />
			<S.LogoArcade_Arcade isSingleLine={isSingleLine}>
				Arcade
			</S.LogoArcade_Arcade>
		</S.LogoArcade>
	);
}
