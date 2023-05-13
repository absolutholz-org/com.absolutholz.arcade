import { Dispatch, SetStateAction } from 'react';

import type { FreeSpacePosition, WinningCombination } from '../../App.types';

export type GameConfiguration = {
	winningCombinations: WinningCombination[];
	freeSpacePosition: FreeSpacePosition;
	symbols?: string[];
};

export type GameConfig = {
	gameId: string | null;
	gameConfiguration: GameConfiguration;
};

export interface IGameConfigurationContext extends GameConfig {
	setGameId: Dispatch<SetStateAction<string | null>>;
	setGameConfiguration: Dispatch<SetStateAction<GameConfiguration>>;
}
