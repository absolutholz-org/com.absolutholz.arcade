import { GameBoard } from '../../../_Game.types';

export function isCompleteCorner(board: GameBoard): boolean {
	const size = Math.sqrt(Object.keys(board).length);

	return !!(
		board['0x0'].found &&
		board[`0x${size - 1}`].found &&
		board[`${size - 1}x0`].found &&
		board[`${size - 1}x${size - 1}`].found
	);
}
