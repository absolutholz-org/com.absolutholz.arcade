import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { Button } from '@arcade/library-components/src/components/Button';

import { WinningCombinations } from './components/WinningCombinations';
import { FreeSpace } from './components/FreeSpace';
import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';
import {
	StickyFormFooter,
	StickyFormFooter_Form,
} from './components/StickyFormFooter';
import {
	GameConfigProvider,
	useGameConfig,
} from '../../contexts/GameConfigContext';

import { SymbolGrid } from './components/SymbolGrid';
import { SymbolPresets } from './components/SymbolPresets';
import { SetList } from './components/SetList';
import { GameSetProvider } from '../../contexts/GameSetContext/_GameSetContext';
import { SymbolPresetsCustom } from './components/SymbolPresetsCustom';
import { CustomPresetsProvider } from '../../contexts/CustomPresetsContext';
import { ScavengerBingoPage } from '../../components/ScavengerBingoPage';

function _Lobby(): JSX.Element {
	const { games, createGame } = useUnfinishedGames();
	const { symbolIds, freeSpacePosition, gameSetId, winningCombinations } =
		useGameConfig();
	const navigate = useNavigate();

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const gameId = nanoid(5);

		createGame(gameId, {
			id: gameId,
			config: {
				symbolIds,
				freeSpacePosition,
				gameSetId,
				winningCombinations,
			},
		});

		navigate(`/game/${gameId}/`);
	}

	return (
		<ScavengerBingoPage pageTitle='Scavenger Bingo Lobby'>
			<PageHeadBillboard
				headline='Lobby'
				headlinePrefix='Scavenger Bingo'
			/>
			<PageSection>
				<Stack spacingY='m'>
					<PageGridContainer>
						<p>
							Choose how you would like to play. Select the
							general game settings that determine how the game is
							played and won and the symbols that you are looking
							for.
						</p>
					</PageGridContainer>

					{/* {games.length > 0 && (
						<PageGridContainer>
								<Banner>
									<Stack>
										<div>
											You have unfinished games. Why not keep
											playing them.
										</div>
										<div>
											<Button to='/myarea/' text='See Games' />
										</div>
									</Stack>
								</Banner>
						</PageGridContainer>
					)} */}

					<StickyFormFooter_Form onSubmit={handleSubmit}>
						<PageGridContainer>
							<Typography size='xl'>Config</Typography>

							<Stack spacingY='m'>
								<Stack tag='fieldset' direction='column'>
									<Typography as='legend' size='l'>
										Winning combinations
									</Typography>
									<WinningCombinations />
								</Stack>

								<Stack tag='fieldset' direction='column'>
									<Typography as='legend' size='l'>
										Free space
									</Typography>
									<FreeSpace />
								</Stack>

								<Stack tag='fieldset' direction='column'>
									<Typography as='legend' size='l'>
										Set
									</Typography>
									<SetList />
								</Stack>

								<Stack
									tag='fieldset'
									direction='column'
									spacingY='s'>
									<Typography as='legend' size='l'>
										Symbol Collections
									</Typography>
									<SymbolPresets />
								</Stack>

								<Stack
									tag='fieldset'
									direction='column'
									spacingY='s'>
									<Typography as='legend' size='l'>
										Your Symbol Collections
									</Typography>
									<SymbolPresetsCustom />
								</Stack>

								<Stack tag='fieldset' direction='column'>
									<Typography as='legend' size='l'>
										Your selection
									</Typography>
									<SymbolGrid />
								</Stack>

								<StickyFormFooter>
									<Stack spacingY='xxs' direction='row'>
										{/* <Typography as='div' size='s'>
											{gameConfig.symbolIds.length}{' '}
											symbols selected
										</Typography> */}

										<Button
											disabled={
												symbolIds.length < 25 ||
												winningCombinations.length === 0
											}
											icon={PlayArrowRoundedIcon}
											text='Play'
											type='submit'
											width='context'
										/>
									</Stack>
								</StickyFormFooter>
							</Stack>
						</PageGridContainer>
					</StickyFormFooter_Form>
				</Stack>
			</PageSection>
		</ScavengerBingoPage>
	);
}

function LobbyProviderWrapper(): JSX.Element {
	return (
		<CustomPresetsProvider>
			<GameSetProvider>
				<GameConfigProvider>
					<_Lobby />
				</GameConfigProvider>
			</GameSetProvider>
		</CustomPresetsProvider>
	);
}

export { LobbyProviderWrapper as Lobby };
