import {
	FREE_SPACE_POSITIONS,
	GAME_BOARD_SIZES,
	WINNING_COMBINATIONS,
} from './App.constants';

export type GameBoardSize = (typeof GAME_BOARD_SIZES)[number];

export type WinningCombination = (typeof WINNING_COMBINATIONS)[number];

export type FreeSpacePosition = (typeof FREE_SPACE_POSITIONS)[number];

export type GameConfig = {
    gameConfigId: string;
	freeSpacePosition: FreeSpacePosition;
	size: number;
	winningCombinations: WinningCombination[];
	symbolIds: string[];
};

export type SymbolConfig = {
	id: string;
	file: string;
	tags?: string[];
	variant?: boolean;
}

export type SymbolPreset = {
	id: string;
	image: {
		id: string;
		file: string;
	};
	symbols: string[];
}
