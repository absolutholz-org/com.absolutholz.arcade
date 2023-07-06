import type { FreeSpacePosition, WinningCombination } from "./GameConfig.types";

export type GameStatus = 'playing' | 'gameWon' | 'gameLost';

export type GameSymbolStatus = 'open' | 'closed';

export type SymbolBasic = {
	found?: boolean;
	id: string;
};

export type SymbolComplete = SymbolBasic & {
	col: number;
	description: number;
	file: string;
	name: string;
	row: number;
	taxonomy: {
		tags: string[];
	};
};

export type Game = {
    id?: string;
	gameSetId?: string;
	freeSpacePosition: FreeSpacePosition;
	winningCombinations: WinningCombination[];
	symbolIds: string[];
    createdOn?: string;
	updatedOn?: string;
    board?: Record<string, SymbolBasic | SymbolComplete>;
    status?: GameStatus;
};
