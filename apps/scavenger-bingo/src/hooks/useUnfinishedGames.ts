import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { STORAGE_PREFIX } from '../App.constants';
import type { GameState } from '../pages/Game/_Game.types';

export type UnfinishedGame = {
	gameId: string;
	createdOn: string;
	updatedOn: string;
};

const STORAGE_GAMES = `${STORAGE_PREFIX}_games`;

function storageName(gameId: string): string {
	return `${STORAGE_PREFIX}_${gameId}`;
}

export function useUnfinishedGames(): [
	UnfinishedGame[],
	(gameId: string, state: GameState) => void,
	(gameId: string, state: GameState) => void,
	(gameId: string) => void
] {
	const [games, setGames] = useLocalStorage<UnfinishedGame[]>(
		STORAGE_GAMES,
		[]
	);

	const readGame = (gameId: string) => {
		return games.find((game) => game.gameId === gameId);
	};

	const addGame = (gameId: string, state: GameState) => {
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

	const removeGame = (gameId: string) => {
		localStorage.removeItem(storageName(gameId));
		setGames((games) => games.filter((game) => game.gameId !== gameId));
	};

	return [games, addGame, updateGame, removeGame];
}
