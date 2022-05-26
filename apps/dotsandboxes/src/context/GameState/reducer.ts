import { GameState } from '../../enums';
import { GameStateAction } from './GameStateAction';
import { IGameStateAction, IGameStateState } from './GameStateContext';

export function reducer(state: IGameStateState, action: IGameStateAction) {
	const { type } = action;

	switch (type) {
		case GameStateAction.NewGame: {
			const { boxes, players } = { ...state };

			for (const box of boxes) {
				for (const border in box.borders) {
					box.borders[border] = null;
				}
				delete box.player;
			}

			for (const player of players) {
				player.gameBoxCount = 0;
				player.gameLineCount = 0;
			}

			return { ...state, boxes, players };
		}

		case GameStateAction.ConnectDots: {
			const { startRowID, startColumnID, endRowID, endColumnID } = action;
			const { boxes, players, currentPlayer } = { ...state };
			let atLeastOneCompletion = false;
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

			const completedBoxes = players.reduce(
				(accumulator, player) => accumulator + player.gameBoxCount,
				0
			);

			if (completedBoxes === state.boxes.length) {
				return {
					...state,
					gameState: GameState.GameOver,
					players,
					boxes,
					currentPlayer,
				};

				// alert(
				// 	`Winners: ${winningPlayers
				// 		.map((player) => player.displayName)
				// 		.join(', ')}`
				// );
			}

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
