import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SiteTemplate } from '@arcade/library-components/src/components/PageTemplates/SiteTemplate';
import { PageGridContainer } from '@arcade/library-components/src/components/PageGrid/PageGridContainer';
import { GameBoard, GameBoard_Field } from './components/GameBoard';
import { GameCardSymbol } from './components/GameCardSymbol';
import translations from '../../configs/germany/translations/de.json';
import { FREE_SPACE_ID } from '../../App.constants';
import { persistGameState, readPersistedGameState } from '../../_storage';
import { createNewGameBoard } from '../../_createNewGameBoard';
import { GameProvider, useGameState } from './contexts/GameContext';

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
			<_Game />
		</GameProvider>
	);
}

function _Game(): JSX.Element {
	const { board, status } = useGameState();

	console.log({ board, translations });

	useEffect(() => {
		if (status === 'gameWon') {
			alert('Game Won!');
		}
	}, [status]);

	return (
		<SiteTemplate pageTitle={'Scavenger Bingo'}>
			<main>
				<PageGridContainer>
					{board && (
						<GameBoard>
							{Object.entries(board).map(
								([id, gameBoardField]) => (
									<GameBoard_Field key={`bingo-card_${id}`}>
										{gameBoardField.id !== FREE_SPACE_ID ? (
											<GameCardSymbol
												id={gameBoardField.id}
												position={id}
												found={gameBoardField.found}
											/>
										) : (
											'free'
										)}
									</GameBoard_Field>
								)
							)}
						</GameBoard>
					)}
				</PageGridContainer>
			</main>
		</SiteTemplate>
	);
}
