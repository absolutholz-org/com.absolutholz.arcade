import { GameBoard } from '../../../_Game.types';
import { isNeighborClosed } from './_isNeighborClosed';

export function isCompleteDiagonalNESW(board: GameBoard): boolean {
	const size = Math.sqrt(Object.keys(board).length);

	return isNeighborClosed({
		board,
		row: 0,
		column: size - 1,
		directionRow: 1,
		directionColumn: -1,
	});
}
