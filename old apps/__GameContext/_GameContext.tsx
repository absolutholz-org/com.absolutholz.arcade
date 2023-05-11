import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { GameBoard } from '../../_Game.types';
import { checkIfGameWon } from '../_GameContext/lib/_checkIfGameWon';

type GameState = {
	board: GameBoard;
	status: 'uninitiated' | 'playing' | 'won';
};

type GameAction = {
	type: 'MARK_SYMBOL_AS_FOUND';
	payload?: any;
};

type GameDispatch = React.Dispatch<GameAction>;

type GameContextType = {
	state: GameState;
	dispatch: GameDispatch;
};

function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case 'MARK_SYMBOL_AS_FOUND':
			const symbolId = action.payload;
			const newBoard = {
				symbols: Object.entries(state.board.symbols).map((symbol) =>
					symbol.id === symbolId ? { ...symbol, found: true } : symbol
				),
			};
			const gameWon = checkIfGameWon(newBoard);
			return { ...state, board: newBoard, gameWon };
		default:
			return state;
	}
}

export const GameContext = createContext<GameContextType>({
	state: undefined,
	dispatch: () => null,
});

interface GameProviderProps {
	children: ReactNode;
	initialState: GameState;
}

export function GameProvider({ children, initialState }: GameProviderProps) {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	);
}

export function useGameState(): GameState | undefined {
	const { state } = useContext(GameContext);
	return state;
}

export function useGameDispatch(): GameDispatch {
	const { dispatch } = useContext(GameContext);
	return dispatch;
}
