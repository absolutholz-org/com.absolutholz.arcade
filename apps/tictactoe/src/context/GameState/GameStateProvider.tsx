import { useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { PlayersContext } from '../../context/Players';
import { GameState, TicTacToePiece } from '../../enums';
import { GameStateContext } from './GameStateContext';

export const DEFAULT_CELL_SETUP = Array.from(Array(3))
	.map((n, row, array) => {
		return Array.from(Array(array.length)).map((n, col) => {
			return {
				row: row % array.length,
				column: col % array.length,
			};
		});
	})
	.flat();

type GameStateProviderProps = { children: React.ReactNode };

export function GameStateProvider({ children }: GameStateProviderProps) {
	const { player1, player2 } = useContext(PlayersContext);
	const [state, dispatch] = useReducer(reducer, {
		gameState: GameState.Playing,
		cells: DEFAULT_CELL_SETUP,
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
