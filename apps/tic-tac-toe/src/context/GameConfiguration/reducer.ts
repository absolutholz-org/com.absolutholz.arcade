import { STORAGE_KEY_SIZE } from './GameConfiguration.annotations';
import { Action, State } from './GameConfigurationContext';

export function reducer(state: State, action: Action) {
	const { type } = action;

	switch (type) {
		// case GameConfigurationAction.SetTheme: {
		// 	const { theme } = action;
		// 	localStorage.setItem(STORAGE_KEY_THEME, theme);
		// 	return { ...state, gameTheme: theme };
		// }
		case 'SetSize': {
			const { size } = action;
			localStorage.setItem(STORAGE_KEY_SIZE, `${size}`);
			return { ...state, gameSize: size };
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
