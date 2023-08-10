import { ARCADE_URL } from '@arcade/library-common/src/constants';

import { ColorSchemeToggler } from '../ColorSchemeToggler';
import { LogoArcade } from '../LogoArcade';
import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { PageSection } from '../PageSection';
import { Stack } from '../Stack';

import { VisuallyHidden } from '../VisuallyHidden';
import * as S from './_ArcadeFooter.styled';
import { LinkList } from '../LinkList';

export function ArcadeFooter(): JSX.Element {
	return (
		<S.ArcadeFooter as='footer' themeSetId='highlight-alt'>
			<PageGridContainer>
				<PageSection>
					<Stack spacingY='m'>
						<div>
							<a href={ARCADE_URL}>
								<LogoArcade isSingleLine />
							</a>
						</div>
						<div>
							<VisuallyHidden>Site Color Scheme</VisuallyHidden>
							<ColorSchemeToggler isTextVisible={false} />
						</div>
						<LinkList>
							<a href='/accessibility/'>
								Accessibility Statement
							</a>
							<a href='/privacy/'>Privacy Statement</a>
						</LinkList>
					</Stack>
				</PageSection>
			</PageGridContainer>
		</S.ArcadeFooter>
	);
}
