import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { PageHeadBillboard } from '@arcade/library-components/src/components/PageHeadBillboard';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { SiteTemplate } from '@arcade/library-components/src/components/PageTemplates/SiteTemplate';
import { Button } from '@arcade/library-components/src/components/Button';

import { WinningCombinations } from './components/WinningCombinations';
import { FreeSpace } from './components/FreeSpace';
import type { FreeSpacePosition, WinningCombination } from '../../App.types';
import { DEFAULT_PARAMETERS } from '../../App.constants';
import { SymbolFilterGrid } from './components/SymbolFilterGrid/_SymbolFilterGrid';
import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';
import {
	StickyFormFooter,
	StickyFormFooter_Form,
} from './components/StickyFormFooter';
import { SymbolPresets } from './components/SymbolPresets';
import { Banner } from './components/Banner';
// import { createNewGameBoard } from '../../_createNewGameBoard';

export function Lobby(): JSX.Element {
	const navigate = useNavigate();
	const [gamePlayConfig, setGamePlayConfig] = useState<{
		freeSpacePosition: FreeSpacePosition;
		size: number;
		winningCombinations: WinningCombination[];
		symbolIds: string[];
	}>(DEFAULT_PARAMETERS);
	const [games, addGame] = useUnfinishedGames();

	function handleComboChange(event: ChangeEvent<HTMLInputElement>) {
		setGamePlayConfig((gamePlayConfig) => {
			const selectedCombo = event.target.value as WinningCombination;
			const winningCombinations = event.target.checked
				? [...gamePlayConfig.winningCombinations, selectedCombo]
				: gamePlayConfig.winningCombinations.filter(
						(combo) => combo !== selectedCombo
				  );
			return { ...gamePlayConfig, winningCombinations };
		});
	}

	function handleFreeSpaceChange(event: ChangeEvent<HTMLInputElement>) {
		const freeSpacePosition = event.target.value as FreeSpacePosition;
		setGamePlayConfig((gamePlayConfig) => {
			return { ...gamePlayConfig, freeSpacePosition };
		});
	}

	function handleSymbolSelectionChange(symbolIds: any) {
		setGamePlayConfig((gamePlayConfig) => {
			return { ...gamePlayConfig, symbolIds };
		});
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const gameId = nanoid(5);

		addGame(gameId, {
			id: gameId,
			config: gamePlayConfig /* , gameBoard */,
		});

		navigate(`/game/${gameId}`);
	}

	return (
		<SiteTemplate pageTitle={'Scavenger Bingo Lobby'}>
			<PageHeadBillboard headline='Lobby' headlinePrefix='Scavenger Bingo' />
			<PageSection>
				<Stack spaceLevelY='m'>
					<PageGridContainer>
						<p>
							Choose how you would like to play. Select the
							general game settings that determine how the game is
							played and won and the symbols that you are looking
							for.
						</p>
					</PageGridContainer>

					<PageGridContainer>
						{games.length > 0 && (
							<Banner>
								<Stack spaceLevelY='s'>
									<div>
										You have unfinished games. Why not keep
										playing them.
									</div>
									<div>
										<Button to='/games' text='See Games' />
									</div>
								</Stack>
							</Banner>
						)}
					</PageGridContainer>

					<StickyFormFooter_Form onSubmit={handleSubmit}>
						<PageGridContainer>
							<Typography size='xl' as='h1'>
								Config
							</Typography>
							<Stack spaceLevelY='s'>
								<WinningCombinations
									selection={
										gamePlayConfig.winningCombinations
									}
									onChange={handleComboChange}
								/>

								<FreeSpace
									selection={gamePlayConfig.freeSpacePosition}
									onChange={handleFreeSpaceChange}
								/>

								<Stack
									tag='fieldset'
									direction='column'
									spaceLevelY='m'>
									<legend>
										<Typography as='div' size='xl'>
											Symbols
										</Typography>
									</legend>

									<SymbolFilterGrid
										onSymbolSelectionChange={
											handleSymbolSelectionChange
										}
									/>
								</Stack>

								<StickyFormFooter>
									<Stack spaceLevelY='xxs' direction='row'>
										<Typography as='div' size='s'>
											{gamePlayConfig.symbolIds.length}{' '}
											symbols selected
										</Typography>

										<Button
											disabled={
												gamePlayConfig.symbolIds
													.length < 25 ||
												gamePlayConfig
													.winningCombinations
													.length === 0
											}
											size='l'
											type='submit'
											variant='contained'
											text='Play'
										/>
									</Stack>
								</StickyFormFooter>
							</Stack>
						</PageGridContainer>
					</StickyFormFooter_Form>
				</Stack>
			</PageSection>
		</SiteTemplate>
	);
}
