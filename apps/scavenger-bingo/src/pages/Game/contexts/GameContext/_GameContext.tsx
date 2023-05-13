import { ReactNode, createContext, useContext, useReducer } from 'react';
import { GameState } from '../../_Game.types';
import { persistGameState } from '../../../../_storage';
import { checkIfGameWon } from './lib/_checkIfGameWon';
import type { GameAction, GameDispatch } from './_GameContext.types';

function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case 'MARK_SYMBOL_AS_FOUND':
			const { position } = action.payload;
			const { id, board, config } = state;

			const newBoard = { ...board };
			newBoard[position].found = true;

			const gameWon = checkIfGameWon({
				board: newBoard,
				column: parseInt(position.charAt(2)),
				row: parseInt(position.charAt(0)),
				winningCombinations: config.winningCombinations,
			});

			let status = state.status;
			if (gameWon) {
				status = 'gameWon';
			}

			const newState = { ...state, board: newBoard, status };
			persistGameState(id, newState);

			return newState;
		default:
			return state;
	}
}

export const GameContext = createContext<{
	state?: GameState;
	dispatch: GameDispatch;
}>({
	state: undefined,
	dispatch: () => null,
});

export function GameProvider({
	children,
	initialState,
}: {
	children: ReactNode;
	initialState: GameState;
}) {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
}

export function useGameState(): GameState {
	const { state } = useContext(GameContext);

	if (state === undefined) {
		throw new Error('useGameState must be used within a GameProvider');
	}

	return state;
}

export function useGameDispatch(): GameDispatch {
	const { dispatch } = useContext(GameContext);

	if (dispatch === undefined) {
		throw new Error('useGameDispatch must be used within a GameProvider');
	}
	return dispatch;
}
