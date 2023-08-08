import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Button } from '@arcade/library-components/src/components/Button';
import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';

import { UnfinishedGameList } from './components/UnfinishedGameList';
import { CustomPresetList } from './components/CustomPresetList';
import { CustomPresetsProvider } from '../../contexts/CustomPresetsContext';
import { ScavengerBingoPage } from '../../components/ScavengerBingoPage';

export function _MyArea() {
	return (
		<ScavengerBingoPage pageTitle='Scavenger Bingo Personal Area'>
			<PageHeadBillboard
				headline='Personal Area'
				headlinePrefix='Scavenger Bingo'
			/>

			<PageSection>
				<PageGridContainer>
					<Stack spacingY='m'>
						<h2>Unfinished Games</h2>
						<UnfinishedGameList />

						<h2>Your saved presets</h2>
						<CustomPresetList />

						<div>
							<Button to='/lobby/' text='New Game' />
						</div>
					</Stack>
				</PageGridContainer>
			</PageSection>
		</ScavengerBingoPage>
	);
}

function MyAreaProviderWrapper(): JSX.Element {
	return (
		<CustomPresetsProvider>
			<_MyArea />
		</CustomPresetsProvider>
	);
}

export { MyAreaProviderWrapper as MyArea };
