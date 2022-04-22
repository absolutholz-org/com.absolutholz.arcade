import { IGameConfigurationState } from './GameConfigurationContext';

const STORAGE_KEY_CONFIG = 'absolutholz.arcade.dotsandboxes:config';

export function getFromStorage(): IGameConfigurationState | null {
	const storageValue = window.localStorage.getItem(STORAGE_KEY_CONFIG);

	if (storageValue) {
		return JSON.parse(storageValue);
	}

	return null;
}

export function setToStorage(state: IGameConfigurationState) {
	window.localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(state));
}
