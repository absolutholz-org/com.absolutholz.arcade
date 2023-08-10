import { Link } from 'react-router-dom';

import { LinkList } from '@arcade/library-components/src/components/LinkList';
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
							<LinkList>
								<Link to='/'>Home</Link>
								<Link to='/lobby/'>New Game Lobby</Link>
								<Link to='/myarea/'>Unfinished Games</Link>
							</LinkList>
						</Stack>
					</Stack>
				</PageSection>
			</PageGridContainer>
		</Theme>
	);
}
