import { GameConfigurationAction } from '../../enums';
import { Action, State } from './GameConfigurationContext';

export const STORAGE_KEY_THEME = 'absolutholz.arcade.tictactoe:theme';
export const STORAGE_KEY_SIZE = 'absolutholz.arcade.tictactoe:size';

export function reducer(state: State, action: Action) {
	const { type } = action;

	switch (type) {
		case GameConfigurationAction.SetTheme: {
			const { theme } = action;
			localStorage.setItem(STORAGE_KEY_THEME, theme);
			return { ...state, gameTheme: theme };
		}
		case GameConfigurationAction.SetSize: {
			const { size } = action;
			localStorage.setItem(STORAGE_KEY_SIZE, `${size}`);
			return { ...state, gameSize: size };
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
