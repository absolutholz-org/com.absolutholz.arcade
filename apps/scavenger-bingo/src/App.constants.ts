import type { GameConfig } from './App.types';

export const STORAGE_PREFIX = 'absolutholzArcade_scavengerBingo';
export const MINIMUM_PLAYERS_REQUIRED = 1;
export const MAXIMUM_PLAYERS_ALLOWED = 4;
export const IMAGE_DIRECTORY = `${import.meta.env.BASE_URL}symbols/optimized/`;

export const GAME_BOARD_SIZES = [5];

export const WINNING_COMBINATIONS = [
	'rows',
	'columns',
	'diagonals',
	'corners',
] as const;
Object.freeze(WINNING_COMBINATIONS);

export const FREE_SPACE_POSITIONS = ['center', 'random', 'none'] as const;
Object.freeze(FREE_SPACE_POSITIONS);

export const FREE_SPACE_ID = 'free-space';

export const DEFAULT_PARAMETERS: GameConfig = {
	winningCombinations: ['rows', 'columns', 'diagonals', 'corners'],
	freeSpacePosition: 'center',
	size: 5,
	symbolIds: [],
};
