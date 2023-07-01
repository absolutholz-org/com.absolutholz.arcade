import { STORAGE_PREFIX_ARCADE } from '@arcade/library-common/src/constants';

import { CONFIGS } from './configs';

import type { GameConfig } from './App.types';

export const STORAGE_APP_PREFIX = `${STORAGE_PREFIX_ARCADE}_scavengerBingo`;
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

export const DEFAULT_GAME_CONFIG: GameConfig = {
	gameConfigId: CONFIGS[0].id,
	winningCombinations: ['rows', 'columns', 'diagonals', 'corners'],
	freeSpacePosition: 'center',
	size: 5,
	symbolIds: [],
};
