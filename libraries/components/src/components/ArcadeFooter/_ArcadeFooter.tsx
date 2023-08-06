import { PageGridContainer } from '../PageGrid/PageGridContainer';
import * as S from './_ArcadeFooter.styled';

export function ArcadeFooter(): JSX.Element {
	return (
		<S.ArcadeFooter as='footer'>
			<PageGridContainer>Arcade footer</PageGridContainer>
		</S.ArcadeFooter>
	);
}
