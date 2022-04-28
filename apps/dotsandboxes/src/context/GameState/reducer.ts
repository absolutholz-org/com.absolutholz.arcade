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

			let borderMatchCount = 0;
			let isBoxComplete = false;

			for (const box of state.boxes) {
				const borderID = `${startRowID}x${startColumnID}|${endRowID}x${endColumnID}`;
				if (box.borders[borderID] !== undefined) {
					box.borders[borderID] = true;

					isBoxComplete = Object.values(box.borders).every(
						(value) => value === true
					);
					if (isBoxComplete) {
						box.player = state.currentPlayer;
					}

					borderMatchCount = +1;
					if (
						borderMatchCount > 1 ||
						startRowID === 0 ||
						startColumnID === 0
					) {
						break;
					}
				}
			}

			console.info({
				startRowID,
				startColumnID,
				endRowID,
				endColumnID,
				borderMatchCount,
				isBoxComplete,
			});
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