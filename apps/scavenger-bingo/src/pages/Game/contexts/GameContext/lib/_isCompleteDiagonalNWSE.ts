import { GameBoard } from '../../../_Game.types';
import { isNeighborClosed } from './_isNeighborClosed';

export function isCompleteDiagonalNWSE(board: GameBoard): boolean {
	return isNeighborClosed({
		board,
		row: 0,
		column: 0,
		directionRow: 1,
		directionColumn: 1,
	});
}
