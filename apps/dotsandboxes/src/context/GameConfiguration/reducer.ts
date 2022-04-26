import { GameConfigurationAction } from './GameConfigurationAction';
import {
	IGameConfigurationAction,
	IGameConfigurationState,
} from './GameConfigurationContext';
import { setToStorage } from './storage';

export function reducer(
	state: IGameConfigurationState,
	action: IGameConfigurationAction
) {
	const { type } = action;
	let newState = { ...state };

	switch (type) {
		case GameConfigurationAction.SetSize: {
			const { size } = action;
			newState = { ...newState, gameSize: size };
			break;
		}
		case GameConfigurationAction.CreatePlayer: {
			if (state.players.length > 3) {
				throw new Error(`Player limit reached`);
			}

			const player = {
				uuid: `player-${state.players.length + 1}`,
				displayName: `Player ${state.players.length + 1}`,
				color: '#000',
			};
			const players = [...state.players];
			players.push(player);
			newState = { ...newState, players };

			break;
		}
		case GameConfigurationAction.UpdatePlayer: {
			const { player } = action;

			const playerToUpdateIndex = newState.players.findIndex(
				({ uuid }) => uuid === player.uuid
			);
			newState.players[playerToUpdateIndex] = player;

			break;
		}
		case GameConfigurationAction.DeletePlayer: {
			const { player } = action;

			const playerToDeleteIndex = newState.players.findIndex(
				({ uuid }) => uuid === player.uuid
			);
			newState.players.splice(playerToDeleteIndex, 1);
			newState.players = [...newState.players];

			break;
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}

	setToStorage(newState);
	return newState;
}
