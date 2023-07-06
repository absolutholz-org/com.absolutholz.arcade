import {
	FREE_SPACE_POSITIONS,
	WINNING_COMBINATIONS,
} from './App.constants';

export type WinningCombination = (typeof WINNING_COMBINATIONS)[number];

export type FreeSpacePosition = (typeof FREE_SPACE_POSITIONS)[number];

export type GameConfig = {
    gameSetId: string;
	freeSpacePosition: FreeSpacePosition;
	winningCombinations: WinningCombination[];
	symbolIds: string[];
};
