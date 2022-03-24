import { TicTacToePiece } from '../enums/TicTacToePiece';

export interface ITicTacToePlayer {
	displayName: string;
	piece: TicTacToePiece;
}
