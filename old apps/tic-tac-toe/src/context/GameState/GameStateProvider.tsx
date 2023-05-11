import { useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { PlayersContext } from '../../context/Players';
import { GameState, TicTacToePiece } from '../../enums';
import { GameStateContext } from './GameStateContext';
import { GameConfigurationContext } from '../GameConfiguration';

export function cellConstructor(cellCount: number) {
	return Array.from(Array(cellCount))
		.map((n, row, array) => {
			return Array.from(Array(array.length)).map((n, col) => {
				return {
					row: row % array.length,
					column: col % array.length,
				};
			});
		})
		.flat();
}

type GameStateProviderProps = { children: React.ReactNode };

export function GameStateProvider({ children }: GameStateProviderProps) {
	const { state: config } = useContext(GameConfigurationContext);
	const { player1, player2 } = useContext(PlayersContext);

	const [state, dispatch] = useReducer(reducer, {
		gameState: GameState.Playing,
		cells: cellConstructor(config.gameSize),
		currentPlayer: player1.piece === TicTacToePiece.X ? player1 : player2,
		players: {
			player1,
			player2,
		},
	});

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}
