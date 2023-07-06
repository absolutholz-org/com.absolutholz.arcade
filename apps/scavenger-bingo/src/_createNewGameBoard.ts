import { shuffle } from './Array.functions';
import type { GameBoard, SymbolBasic } from './pages/Game/_Game.types';
import { FREE_SPACE_ID } from './App.constants';
import type { FreeSpacePosition } from './GameConfig.types';

const FREE_SPACE_SYMBOL: SymbolBasic = {
	id: FREE_SPACE_ID,
	found: true,
};

export function createNewGameBoard({
	freeSpacePosition,
	symbolIds,
}: {
	freeSpacePosition: FreeSpacePosition;
	symbolIds: string[];
}): GameBoard {
	const size = 5;
	const gameBoard = shuffle(symbolIds)
		.slice(0, size ** 2)
		.reduce((acc, symbol, index) => {
			const row = Math.floor(index / size);
			const col = Math.floor(index % size);

			acc[`${row}x${col}`] = { id: symbol, found: false };
			return acc;
		}, {} as GameBoard);

	const lastIndex = size - 1;
	if (freeSpacePosition === 'center') {
		const middleIndex = lastIndex / 2;
		gameBoard[`${middleIndex}x${middleIndex}`] = FREE_SPACE_SYMBOL;
	} else if (freeSpacePosition === 'random') {
		const row = Math.round(Math.random() * lastIndex);
		const col = Math.round(Math.random() * lastIndex);
		gameBoard[`${row}x${col}`] = FREE_SPACE_SYMBOL;
	}

	return gameBoard;
}
