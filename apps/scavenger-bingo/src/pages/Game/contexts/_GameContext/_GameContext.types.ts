import type {
	GameBoard,
	GameStatus,
	GameWinningCombinations,
} from '../../_Game.types';

export type GameContext = {
	// config: {
	// 	winningCombos: GameWinningCombos[];
	// };

	gameBoard: GameBoard;

	gameStatus: GameStatus;

	markSymbolClosed: (position: string) => void;

	// symbols: {
	// 	id: string;
	// 	filename: string;
	// }[];
};
