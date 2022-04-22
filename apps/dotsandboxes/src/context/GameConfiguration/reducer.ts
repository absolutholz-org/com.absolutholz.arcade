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
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}

	setToStorage(newState);
	return newState;
}
