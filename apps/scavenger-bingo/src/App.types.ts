import {
	FREE_SPACE_POSITIONS,
	GAME_BOARD_SIZES,
	WINNING_COMBINATIONS,
} from './App.constants';

export type GameBoardSize = (typeof GAME_BOARD_SIZES)[number];

export type WinningCombination = (typeof WINNING_COMBINATIONS)[number];

export type FreeSpacePosition = (typeof FREE_SPACE_POSITIONS)[number];

export type GameConfig = {
	freeSpacePosition: FreeSpacePosition;
	size: number;
	winningCombinations: WinningCombination[];
	symbolIds: string[];
};