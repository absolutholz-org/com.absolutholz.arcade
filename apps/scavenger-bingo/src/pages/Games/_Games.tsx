import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { SiteTemplate } from '@arcade/library-components/src/components/PageTemplates/SiteTemplate';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { Button } from '@arcade/library-components/src/components/buttons/Button';

import { GameList } from '../../components/GameList';

export function Games() {
	return (
		<SiteTemplate pageTitle={'Scavenger Bingo Lobby'}>
			<PageSection>
				<PageGridContainer>
					<Stack spaceLevelY='m'>
						<Typography size='xl'>Games</Typography>
						<GameList />
						<div>
							<Button size='l' to='/lobby'>
								New Game
							</Button>
						</div>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</SiteTemplate>
	);
}
