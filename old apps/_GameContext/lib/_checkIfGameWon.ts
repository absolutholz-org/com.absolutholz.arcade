import type { GameBoard } from '../../../_Game.types';
import { isNeighborClosed } from './_isNeighborClosed';

export function checkIfGameWon({
	gameBoard,
	row,
	column,
}: {
	gameBoard: GameBoard;
	row: number;
	column: number;
}): boolean {
	// The total number of columns/rows.
	const size = Math.sqrt(Object.keys(gameBoard).length);

	// check if column is complete
	if (
		isNeighborClosed({
			gameBoard,
			row,
			column,
			directionRow: -1,
			directionColumn: 0,
		}) &&
		isNeighborClosed({
			gameBoard,
			row,
			column,
			directionRow: 1,
			directionColumn: 0,
		})
	) {
		// announceGameWon();
		return true;
	}

	// check if row is complete
	if (
		isNeighborClosed({
			gameBoard,
			row,
			column,
			directionRow: 0,
			directionColumn: -1,
		}) &&
		isNeighborClosed({
			gameBoard,
			row,
			column,
			directionRow: 0,
			directionColumn: 1,
		})
	) {
		// announceGameWon();
		return true;
	}

	// check if diagonal is complete (NW/SE)
	if (row === column) {
		if (
			isNeighborClosed({
				gameBoard,
				row,
				column,
				directionRow: -1,
				directionColumn: -1,
			}) &&
			isNeighborClosed({
				gameBoard,
				row,
				column,
				directionRow: 1,
				directionColumn: 1,
			})
		) {
			// announceGameWon();
			return true;
		}
	}

	// check if diagonal is complete (NE/SW)
	if (row + column === size - 1) {
		if (
			isNeighborClosed({
				gameBoard,
				row,
				column,
				directionRow: -1,
				directionColumn: 1,
			}) &&
			isNeighborClosed({
				gameBoard,
				row,
				column,
				directionRow: 1,
				directionColumn: -1,
			})
		) {
			// announceGameWon();
			return true;
		}
	}

	// check it corners are complete
	if (
		((row === 0 && column === 0) ||
			(row === 0 && column === size - 1) ||
			(row === size - 1 && column === 0) ||
			(row === size - 1 && column === size - 1)) &&
		gameBoard['0x0'].status === 'closed' &&
		gameBoard[`0x${size - 1}`].status === 'closed' &&
		gameBoard[`${size - 1}x0`].status === 'closed' &&
		gameBoard[`${size - 1}x${size - 1}`].status === 'closed'
	) {
		// announceGameWon();
		return true;
	}

	return false;
}
