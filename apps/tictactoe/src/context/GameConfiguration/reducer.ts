import { GameConfigurationAction } from '../../enums';
import { Action, State } from './GameConfigurationContext';

export const STORAGE_KEY_THEME = 'absolutholz.arcade.tictactoe:theme';

export function reducer(state: State, action: Action) {
	const { type, payload } = action;

	switch (type) {
		case GameConfigurationAction.SetTheme: {
			localStorage.setItem(STORAGE_KEY_THEME, payload.theme);
			return { ...state, gameTheme: payload.theme };
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
