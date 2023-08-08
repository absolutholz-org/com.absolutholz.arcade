import { Link } from 'react-router-dom';

import { ColorSchemeToggler } from '@arcade/library-components/src/components/ColorSchemeToggler';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { Theme } from '@arcade/library-components/src/components/Theme';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';

import type { IScavengerBingoFooter } from './_ScavengerBingoFooter.types';

export function ScavengerBingoFooter({}: IScavengerBingoFooter): JSX.Element {
	return (
		<Theme themeSetId='highlight'>
			<PageGridContainer>
				<PageSection>
					<Stack spacingY='l'>
						<Stack tag='nav'>
							<Typography size='l'>Scavenger Bingo</Typography>
							<Stack
								direction='row'
								shouldResetList
								spacingX='m'
								spacingY='xxs'
								tag='ul'>
								<Link to='/'>Home</Link>
								<Link to='/lobby/'>New Game Lobby</Link>
								<Link to='/myarea/'>Unfinished Games</Link>
							</Stack>
						</Stack>
						<div>
							Site Color Scheme:{' '}
							<ColorSchemeToggler isTextVisible={false} />
						</div>
					</Stack>
				</PageSection>
			</PageGridContainer>
		</Theme>
	);
}
