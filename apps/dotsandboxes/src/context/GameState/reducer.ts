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
			const { startRowID, startColumnID, endRowID, endColumnID } = action;
			const boxes = [...state.boxes];
			let atLeastOneCompletion = false;

			for (const box of boxes) {
				const borderID = `${startRowID}x${startColumnID}|${endRowID}x${endColumnID}`;
				if (box.borders[borderID] !== undefined) {
					box.borders[borderID] = state.currentPlayer.color;

					const isBoxComplete = Object.values(box.borders).every(
						(value) => value !== null
					);

					if (isBoxComplete) {
						box.player = { ...state.currentPlayer };
						atLeastOneCompletion = true;
					}
				}
			}

			if (!atLeastOneCompletion) {
				const currentPlayerIndex = state.players.findIndex(
					(player) => player.uuid === state.currentPlayer.uuid
				);
				const nextPlayer =
					state.players[
						currentPlayerIndex + 1 >= state.players.length
							? 0
							: currentPlayerIndex + 1
					];
				return { ...state, currentPlayer: nextPlayer, boxes };
			} else {
				return { ...state, boxes };
			}
		}

		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
