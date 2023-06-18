import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';

import { GameList } from '../../components/GameList';
import { PageWithFooterTemplate } from '@arcade/library-components/src/components/templates/PageWithFooterTemplate';

export function Games() {
	return (
		<PageWithFooterTemplate pageTitle='Scavenger Bingo Unfinished Games'>
			<PageHeadBillboard headline='Unfinished Games' headlinePrefix='Scavenger Bingo' />

			<PageSection>
				<PageGridContainer>
					<Stack spacingY='m'>
						<GameList />
						<div>
							<Button size='l' to='/lobby' text='New Game' />
						</div>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</PageWithFooterTemplate>
	);
}
