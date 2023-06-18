import { useNavigate, useParams } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';
import { mdiTrophyAward } from '@mdi/js';

import { SiteTemplate } from '@arcade/library-components/src/components/templates/SiteTemplate';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { PageSection } from '@arcade/library-components/src/components/PageSection';
import { Dialog } from '@arcade/library-components/src/components/Dialog';
import { Typography } from '@arcade/library-components/src/components/Typography';

import { GameBoard, GameBoard_Field } from './components/GameBoard';
import { GameCardSymbol } from './components/GameCardSymbol';
import translations from '../../configs/germany-road-signs/translations/de.json';
import { FREE_SPACE_ID } from '../../App.constants';
import { persistGameState, readPersistedGameState } from '../../_storage';
import { createNewGameBoard } from '../../_createNewGameBoard';
import { GameProvider, useGameState } from './contexts/GameContext';
import { FoundSymbol } from './components/FoundSymbol';
import { FreeSpaceSymbol } from './components/FreeSpaceSymbol';
import { Button } from '@arcade/library-components/src/components/Button';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { useUnfinishedGames } from '../../hooks/useUnfinishedGames';

export function Game(): JSX.Element {
	const { gameId } = useParams();

	// TODO: better to redirect to an error page
	if (gameId === undefined) return <></>;

	const gameState = readPersistedGameState(gameId);

	// TODO: better to redirect to an error page
	if (gameState?.config === undefined) return <></>;

	let board = gameState?.board;

	if (!board) {
		const { size, freeSpacePosition, symbolIds } = gameState.config;
		board = createNewGameBoard({
			size,
			freeSpacePosition,
			symbolIds,
		});

		persistGameState(gameId, {
			...gameState,
			id: gameId,
			board,
		});
	}

	return (
		<GameProvider
			initialState={{
				...gameState,
				board,
			}}>
			<_Game gameId={gameId} />
		</GameProvider>
	);
}

function _Game({ gameId }: { gameId: string }): JSX.Element {
	const { board, status } = useGameState();

	const navigate = useNavigate();
	const [, , , removeGame] = useUnfinishedGames();

	function handlePlayAgainClick() {
		removeGame(gameId);
		navigate(`/lobby`);
	}

	return (
		<>
			<SiteTemplate pageTitle={'Scavenger Bingo'}>
				<PageSection>
					<PageGridContainer>
						{board && (
							<GameBoard>
								{Object.entries(board).map(
									([id, gameBoardField]) => (
										<GameBoard_Field
											key={`bingo-card_${id}`}>
											{gameBoardField.id !==
											FREE_SPACE_ID ? (
												<GameCardSymbol
													id={gameBoardField.id}
													position={id}
													found={gameBoardField.found}
												/>
											) : (
												<FreeSpaceSymbol />
											)}
										</GameBoard_Field>
									)
								)}
							</GameBoard>
						)}
					</PageGridContainer>
				</PageSection>
			</SiteTemplate>

			<Dialog
				shouldShow={status === 'gameWon'}
				onClose={() => {}}
				icon={mdiTrophyAward}
				iconEffect={
					<ConfettiExplosion
						force={0.5}
						duration={8000}
						particleCount={250}
						width={1600}
						zIndex={1}
					/>
				}>
				<Stack spaceLevelY='l'>
					<Typography size='xxxxl'>You win!</Typography>
					<Button
						variant='contained'
						size='l'
						onClick={handlePlayAgainClick}
						text='Play again'
					/>
				</Stack>
			</Dialog>
		</>
	);
}
