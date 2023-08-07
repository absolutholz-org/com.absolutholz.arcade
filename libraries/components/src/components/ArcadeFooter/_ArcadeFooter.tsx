import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { PageSection } from '../PageSection';
import { Stack } from '../Stack';

import * as S from './_ArcadeFooter.styled';

export function ArcadeFooter(): JSX.Element {
	return (
		<S.ArcadeFooter as='footer' themeSetId='highlight-alt'>
			<PageGridContainer>
				<PageSection>
					<Stack direction='row'>
						<a href='https://arcade.absolutholz.de/'>
							absolutholz Arcade
						</a>
						<a href='/accessibility/'>Accessibility Statement</a>
						<a href='/privacy/'>Privacy Statement</a>
					</Stack>
				</PageSection>
			</PageGridContainer>
		</S.ArcadeFooter>
	);
}
