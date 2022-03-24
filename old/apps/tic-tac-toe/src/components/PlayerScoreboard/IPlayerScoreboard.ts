import { TicTacToePiece } from '../../enums';

export interface IPlayerScoreboardProps {
	displayName: string;
	gamesWon: number;
	isCurrentPlayer: boolean;
	piece: TicTacToePiece;
}
