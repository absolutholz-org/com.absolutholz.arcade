import { TicTacToePiece } from '../../enums';

export interface IScoreboardProps {
	displayName: string;
	piece: TicTacToePiece;
	gamesWon: number;
}
