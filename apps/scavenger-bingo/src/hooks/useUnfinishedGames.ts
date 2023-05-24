import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { STORAGE_PREFIX } from '../App.constants';

export type UnfinishedGame = {
	gameId: string;
	createdOn: string;
	updatedOn: string;
};

const STORAGE_GAMES = `${STORAGE_PREFIX}_games`;

export function useUnfinishedGames(): [
	UnfinishedGame[],
	(gameId: string) => void,
	(gameId: string) => void,
	(gameId: string) => void
] {
	const [games, setGames] = useLocalStorage<UnfinishedGame[]>(
		STORAGE_GAMES,
		[]
	);

	const addGame = (gameId: string) => {
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

	const removeGame = (gameId: string) => {
		setGames((games) => games.filter((game) => game.gameId !== gameId));
	};

	const updateGame = (gameId: string) => {
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

	return [games, addGame, removeGame, updateGame];
}
