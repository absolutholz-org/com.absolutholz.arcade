import { ReactNode, useEffect, useState } from 'react';

// import { default as temporarySymbolSet } from '../../../../configs/germany';

import GameContext from './_GameContext';
import type { GameBoard, GameStatus, GameState } from '../../_Game.types';
import { checkIfGameWon } from './lib/_checkIfGameWon';
import { persistGameState, readPersistedGameState } from './lib/_storage';
import { createNewGameBoard } from '../../../../_createNewGameBoard';

export const GameContextProvider = ({
	children,
	gameId,
	initialConfig,
}: {
	children: ReactNode;
	gameId: string;
	initialConfig: GameState;
}): JSX.Element => {
	const [gameBoard, setGameBoard] = useState<GameBoard>(
		initialConfig?.gameBoard
	);
	// const { symbols } = temporarySymbolSet;
	const [gameStatus, setGameStatus] = useState<GameStatus>(
		initialConfig.state ?? 'playing'
	);

	function markSymbolClosed(position: string): void {
		if (gameBoard === undefined) return;

		setGameBoard((gameBoard) => {
			gameBoard[position].status = 'closed';
			const newGameBoard = { ...gameBoard };

			const gameConfig = readPersistedGameState(gameId);
			persistGameState(gameId, {
				config: gameConfig?.config!,
				gameBoard: newGameBoard,
			});

			const isGameWon = checkIfGameWon({
				gameBoard: newGameBoard,
				row: parseInt(position.charAt(0)),
				column: parseInt(position.charAt(2)),
			});

			if (isGameWon) {
				setGameStatus('gameover');
			}

			return newGameBoard;
		});
	}

	return (
		<GameContext.Provider
			value={{ gameBoard, gameStatus, markSymbolClosed }}>
			{children}
		</GameContext.Provider>
	);
};
