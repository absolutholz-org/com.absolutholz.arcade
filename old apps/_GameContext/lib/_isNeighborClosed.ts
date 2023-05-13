import type { GameBoard } from '../../../_Game.types';

type IsNeighborClosed = {
	gameBoard: GameBoard;
	row: number;
	column: number;
	directionRow: 0 | 1 | -1;
	directionColumn: 0 | 1 | -1;
};

// type IsNeighborClosedRow = Exclude<IsNeighborClosed, 'directionRow'> & {
// 	directionRow: 0;
// };

// type IsNeighborClosedColumn = Exclude<IsNeighborClosed, 'directionColumn'> & {
// 	directionColumn: 0;
// };

export function isNeighborClosed({
	gameBoard,
	row,
	column,
	directionRow,
	directionColumn,
}: IsNeighborClosed): boolean {
	const size = Math.sqrt(Object.keys(gameBoard).length);

	// This check shouldn't be necessary, but I can't get the discriminating arguments type to work.
	if (directionColumn === 0 && directionRow === 0) {
		throw new Error(
			`Incorrect directional params, row: ${directionRow}, column: ${directionColumn}`
		);
	}

	// The neighbor is off the boundaries of the board, so we count it as a match and don't go any further.
	if (row < 0 || column < 0 || row >= size || column >= size) return true;

	const gridSquare = gameBoard[`${row}x${column}`];
	const isClosed = gridSquare?.status === 'closed';

	if (!isClosed) return false;

	// neighbor matches current player piece, check its neighbor
	return isNeighborClosed({
		gameBoard,
		row: row + directionRow,
		column: column + directionColumn,
		directionRow,
		directionColumn,
	});
}
