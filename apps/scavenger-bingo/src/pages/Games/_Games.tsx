import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { SiteTemplate } from '@arcade/library-components/src/components/PageTemplates/SiteTemplate';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';

import { GameList } from '../../components/GameList';

export function Games() {
	return (
		<SiteTemplate pageTitle={'Scavenger Bingo Unfinished Games'}>
			<PageHeadBillboard headline='Unfinished Games' headlinePrefix='Scavenger Bingo' />

			<PageSection>
				<PageGridContainer>
					<Stack spaceLevelY='m'>
						<GameList />
						<div>
							<Button size='l' to='/lobby' text='New Game' />
						</div>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</SiteTemplate>
	);
}
