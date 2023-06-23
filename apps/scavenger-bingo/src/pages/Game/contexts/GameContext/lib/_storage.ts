import { STORAGE_APP_PREFIX } from '../../../../../App.constants';
import type { GameState } from '../../../_Game.types';

function storageName(gameId: string): string {
	return `${STORAGE_APP_PREFIX}_${gameId}`;
}

export function persistGameState(gameId: string, state: GameState) {
	sessionStorage.setItem(storageName(gameId), JSON.stringify(state));
}

export function readPersistedGameState(gameId: string): GameState | null {
	const gamePlay = sessionStorage.getItem(storageName(gameId));

	if (gamePlay === null) return null;

	const gameState = JSON.parse(gamePlay);
	return gameState;
}
