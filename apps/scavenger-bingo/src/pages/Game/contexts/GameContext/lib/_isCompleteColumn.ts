import { GameBoard } from '../../../_Game.types';
import { isNeighborClosed } from './_isNeighborClosed';

export function isCompleteColumn(board: GameBoard, column: number): boolean {
	return isNeighborClosed({
		board,
		row: 0,
		column,
		directionRow: 1,
		directionColumn: 0,
	});
}
