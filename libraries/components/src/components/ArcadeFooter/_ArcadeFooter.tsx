import { ARCADE_URL } from '@arcade/library-common/src/constants';

import { ColorSchemeToggler } from '../ColorSchemeToggler';
import { LogoArcade } from '../LogoArcade';
import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { PageSection } from '../PageSection';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import { Theme } from '../Theme';

export function ArcadeFooter(): JSX.Element {
	return (
		<Theme as='footer' themeSetId='highlight-alt'>
			<PageGridContainer>
				<PageSection>
					<Stack spacingY='l'>
						<div>
							<Typography size='s'>Site Color Scheme</Typography>
							<ColorSchemeToggler isTextVisible={false} />
						</div>
						<Stack direction='row'>
							<a href={ARCADE_URL}>
								<LogoArcade isSingleLine />
							</a>
							<a href='/accessibility/'>
								Accessibility Statement
							</a>
							<a href='/privacy/'>Privacy Statement</a>
						</Stack>
					</Stack>
				</PageSection>
			</PageGridContainer>
		</Theme>
	);
}
