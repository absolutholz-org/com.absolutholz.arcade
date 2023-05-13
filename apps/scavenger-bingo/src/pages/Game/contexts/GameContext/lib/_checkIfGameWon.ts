import { WinningCombination } from '../../../../../App.types';
import type { GameBoard } from '../../../_Game.types';
import { isCompleteColumn } from './_isCompleteColumn';
import { isCompleteCorner } from './_isCompleteCorner';
import { isCompleteDiagonalNESW } from './_isCompleteDiagonalNESW';
import { isCompleteDiagonalNWSE } from './_isCompleteDiagonalNWSE';
import { isCompleteRow } from './_isCompleteRow';
import { isNeighborClosed } from './_isNeighborClosed';

export function checkIfGameWon({
	board,
	column,
	row,
	winningCombinations,
}: {
	board: GameBoard;
	column: number;
	row: number;
	winningCombinations: WinningCombination[];
}): boolean {
	// split the logic into individual functions
	// only check what is configured winning combos

	return (
		(winningCombinations.includes('columns') &&
			isCompleteColumn(board, column)) ||
		(winningCombinations.includes('rows') && isCompleteRow(board, row)) ||
		(winningCombinations.includes('diagonals') &&
			isCompleteDiagonalNESW(board)) ||
		isCompleteDiagonalNWSE(board) ||
		(winningCombinations.includes('corners') && isCompleteCorner(board))
	);

	// // The total number of columns/rows.
	// const size = Math.sqrt(Object.keys(board).length);

	// // check if column is complete
	// if (
	// 	isNeighborClosed({
	// 		board,
	// 		row,
	// 		column,
	// 		directionRow: -1,
	// 		directionColumn: 0,
	// 	}) &&
	// 	isNeighborClosed({
	// 		board,
	// 		row,
	// 		column,
	// 		directionRow: 1,
	// 		directionColumn: 0,
	// 	})
	// ) {
	// 	// announceGameWon();
	// 	return true;
	// }

	// // check if row is complete
	// if (
	// 	isNeighborClosed({
	// 		board,
	// 		row,
	// 		column,
	// 		directionRow: 0,
	// 		directionColumn: -1,
	// 	}) &&
	// 	isNeighborClosed({
	// 		board,
	// 		row,
	// 		column,
	// 		directionRow: 0,
	// 		directionColumn: 1,
	// 	})
	// ) {
	// 	// announceGameWon();
	// 	return true;
	// }

	// // check if diagonal is complete (NW/SE)
	// if (row === column) {
	// 	if (
	// 		isNeighborClosed({
	// 			board,
	// 			row,
	// 			column,
	// 			directionRow: -1,
	// 			directionColumn: -1,
	// 		}) &&
	// 		isNeighborClosed({
	// 			board,
	// 			row,
	// 			column,
	// 			directionRow: 1,
	// 			directionColumn: 1,
	// 		})
	// 	) {
	// 		// announceGameWon();
	// 		return true;
	// 	}
	// }

	// // check if diagonal is complete (NE/SW)
	// if (row + column === size - 1) {
	// 	if (
	// 		isNeighborClosed({
	// 			board,
	// 			row,
	// 			column,
	// 			directionRow: -1,
	// 			directionColumn: 1,
	// 		}) &&
	// 		isNeighborClosed({
	// 			board,
	// 			row,
	// 			column,
	// 			directionRow: 1,
	// 			directionColumn: -1,
	// 		})
	// 	) {
	// 		// announceGameWon();
	// 		return true;
	// 	}
	// }

	// // check it corners are complete
	// if (
	// 	((row === 0 && column === 0) ||
	// 		(row === 0 && column === size - 1) ||
	// 		(row === size - 1 && column === 0) ||
	// 		(row === size - 1 && column === size - 1)) &&
	// 	board['0x0'].found &&
	// 	board[`0x${size - 1}`].found &&
	// 	board[`${size - 1}x0`].found &&
	// 	board[`${size - 1}x${size - 1}`].found
	// ) {
	// 	// announceGameWon();
	// 	return true;
	// }

	// return false;
}
