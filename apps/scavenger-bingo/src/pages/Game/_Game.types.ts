import type { GameConfig } from '../../GameConfig.types';

export type GameStatus = 'playing' | 'gameWon' | 'gameLost';
export type GameCardSymbolStatus = 'open' | 'closed';

export type SymbolBasic = {
	found?: boolean;
	id: string;
};

export type SymbolComplete = SymbolBasic & {
	col: number;
	description: number;
	file: string;
	name: string;
	position: string;
	row: number;
	taxonomy: {
		tags: string[];
	};
};

export type GameBoard = Record<string, SymbolBasic | SymbolComplete>;

export type GameState = {
	id: string;
	config: GameConfig;
	board?: Record<string, SymbolBasic>;
	status?: GameStatus;
};
