import { GameStateAction } from './GameStateAction';
import { IGameStateAction, IGameStateState } from './GameStateContext';

export function reducer(state: IGameStateState, action: IGameStateAction) {
	const { type } = action;

	switch (type) {
		case GameStateAction.NewGame: {
			// const squares = cellConstructor(Math.sqrt(state.squares.length));
			// const gameState = GameState.Playing;
			// const currentPlayer =
			// 	state.currentPlayer === state.players.player1
			// 		? state.players.player2
			// 		: state.players.player1;
			// return { ...state, squares, currentPlayer, gameState };
			return { ...state };
		}

		case GameStateAction.ConnectDots: {
			// const squares = cellConstructor(Math.sqrt(state.squares.length));
			// const gameState = GameState.Playing;
			// return { ...state, squares, gameState };
			return { ...state };
		}

		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
