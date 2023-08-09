import * as S from './_LogoAbsolutholz.styled';
import { ILogoAbsolutholz } from './_LogoAbsolutholz.types';

export function LogoAbsolutholz({
	relativeSize = 'm',
}: ILogoAbsolutholz): JSX.Element {
	return (
		<S.LogoAbsolutholz size={relativeSize}>
			<S.LogoAbsolutholz_Absolut>absolut</S.LogoAbsolutholz_Absolut>
			<S.LogoAbsolutholz_Holz>holz</S.LogoAbsolutholz_Holz>
		</S.LogoAbsolutholz>
	);
}
