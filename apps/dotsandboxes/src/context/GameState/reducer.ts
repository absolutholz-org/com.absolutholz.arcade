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
			const players = [...state.players];
			const currentPlayer = { ...state.currentPlayer };
			currentPlayer.gameLineCount += 1;

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
						currentPlayer.gameBoxCount += 1;
					}
				}
			}

			players.splice(
				players.findIndex(
					(player) => player.uuid === currentPlayer.uuid
				),
				1,
				currentPlayer
			);

			if (!atLeastOneCompletion) {
				const currentPlayerIndex = players.findIndex(
					(player) => player.uuid === state.currentPlayer.uuid
				);
				const nextPlayer =
					players[
						currentPlayerIndex + 1 >= state.players.length
							? 0
							: currentPlayerIndex + 1
					];
				return { ...state, players, boxes, currentPlayer: nextPlayer };
			} else {
				return { ...state, players, boxes, currentPlayer };
			}
		}

		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
