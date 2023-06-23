import { STORAGE_APP_PREFIX } from './App.constants';
import { GameState } from './pages/Game/_Game.types';

const STORAGE_GAMES = `${STORAGE_APP_PREFIX}_games`;

function storageName(gameId: string): string {
	return `${STORAGE_APP_PREFIX}_${gameId}`;
}

export function persistGameState(gameId: string, state: GameState) {
	localStorage.setItem(storageName(gameId), JSON.stringify(state));
}

export function readPersistedGameState(gameId: string): GameState | null {
	const gamePlay = localStorage.getItem(storageName(gameId));

	if (gamePlay === null) return null;

	const gameState = JSON.parse(gamePlay);
	return gameState;
}

export type UnfinishedGame = {
	gameId: string;
	createdOn: string;
	updatedOn: string;
};

export function createGame(gameId: string): void {
	const games = readGames();

	games.push({
		gameId,
		createdOn: new Date().toISOString(),
		updatedOn: new Date().toISOString(),
	});

	localStorage.setItem(STORAGE_GAMES, JSON.stringify(games));
}

export function readGames(): UnfinishedGame[] {
	const unparsedGames = localStorage.getItem(STORAGE_GAMES);
	const games = JSON.parse(unparsedGames || '[]');
	return games;
}

export function deleteGame(gameId: string): void {
	const games = readGames();

	const remainingGames = games.filter(
		({ gameId: iterationGameId }) => iterationGameId !== gameId
	);

	localStorage.removeItem(storageName(gameId));
	localStorage.setItem(STORAGE_GAMES, JSON.stringify(remainingGames));
}
