import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { STORAGE_PREFIX } from '../App.constants';
import type { GameState } from '../pages/Game/_Game.types';

export type UnfinishedGame = {
	gameId: string;
	createdOn: string;
	updatedOn: string;
};

export type ExtendedGameInfo = GameState & { createdOn: string; updatedOn: string; };

const STORAGE_GAMES = `${STORAGE_PREFIX}_games`;

function storageName(gameId: string): string {
	return `${STORAGE_PREFIX}_${gameId}`;
}

export function useUnfinishedGames(): {
	games: UnfinishedGame[],
	createGame: (gameId: string, state: GameState) => void,
	readGame: (gameId: string) => GameState | undefined,
	updateGame: (gameId: string, state: GameState) => void,
	deleteGame: (gameId: string) => void,
} {
	const [games, setGames] = useLocalStorage<UnfinishedGame[]>(
		STORAGE_GAMES,
		[]
	);

	const readGame = (gameId: string): ExtendedGameInfo | undefined => {
		const unparsedGame = localStorage.getItem(`${STORAGE_PREFIX}_${gameId}`);
		if (!unparsedGame) return undefined;
		const game = JSON.parse(unparsedGame || '');

		const unfinishedGame = games.find((game) => game.gameId === gameId);
		if (!unfinishedGame) return undefined;
		const {updatedOn, createdOn} = unfinishedGame;
		
		return {...game, updatedOn, createdOn};
	};

	const createGame = (gameId: string, state: GameState) => {
		localStorage.setItem(storageName(gameId), JSON.stringify(state));
		setGames((games) => {
			return [
				...games,
				{
					gameId,
					createdOn: new Date().toISOString(),
					updatedOn: new Date().toISOString(),
				},
			];
		});
	};

	const updateGame = (gameId: string, state: GameState) => {
		localStorage.setItem(storageName(gameId), JSON.stringify(state));
		setGames((games) =>
			games.map((game) => {
				if (game.gameId === gameId) {
					return {
						...game,
						updatedOn: new Date().toISOString(),
					};
				}
				return game;
			})
		);
	};

	const deleteGame = (gameId: string) => {
		localStorage.removeItem(storageName(gameId));
		setGames((games) => games.filter((game) => game.gameId !== gameId));
	};

	return {games, createGame, readGame, updateGame, deleteGame};
}
