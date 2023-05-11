import { GameBoard } from '../../../_Game.types';
import { isNeighborClosed } from './_isNeighborClosed';

export function isCompleteRow(board: GameBoard, row: number): boolean {
	return isNeighborClosed({
		board,
		row,
		column: 0,
		directionRow: 0,
		directionColumn: 1,
	});
}
