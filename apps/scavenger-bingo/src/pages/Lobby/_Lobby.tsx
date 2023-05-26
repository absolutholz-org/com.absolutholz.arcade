import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { Typography } from '@arcade/library-components/src/components/Typography';
import { SiteTemplate } from '@arcade/library-components/src/components/PageTemplates/SiteTemplate';
import { Button } from '@arcade/library-components/src/components/buttons/Button';

import { WinningCombinations } from './components/WinningCombinations';
import { FreeSpace } from './components/FreeSpace';
import type { FreeSpacePosition, WinningCombination } from '../../App.types';
import { DEFAULT_PARAMETERS } from '../../App.constants';
import { createGame, persistGameState, readGames } from '../../_storage';
import { SymbolFilterGrid } from './components/SymbolFilterGrid/_SymbolFilterGrid';
import { GameList } from '../../components/GameList';
import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';
import { UnfinishedGameNotifier } from '../../components/UnfinishedGameNotifier';
// import { createNewGameBoard } from '../../_createNewGameBoard';

export function Lobby(): JSX.Element {
	const navigate = useNavigate();
	const [gamePlayConfig, setGamePlayConfig] =
		useState<{
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
			<PageSection>
				<PageGridContainer>
					<Stack spaceLevelY='m'>
						<Typography level={2}>Config</Typography>

						<form onSubmit={handleSubmit}>
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

								<SymbolFilterGrid
									onSymbolSelectionChange={
										handleSymbolSelectionChange
									}
								/>

								<div>
									<Button
										disabled={
											gamePlayConfig.symbolIds.length <
												25 ||
											gamePlayConfig.winningCombinations
												.length === 0
										}
										size='l'
										type='submit'
										variant='contained'>
										Play
									</Button>
								</div>
							</Stack>
						</form>
					</Stack>
				</PageGridContainer>
			</PageSection>
			<UnfinishedGameNotifier />
		</SiteTemplate>
	);
}
