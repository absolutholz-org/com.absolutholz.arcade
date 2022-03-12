import { TicTacToePiece } from '../../enums';

export interface IPlayerScoreboardProps {
	displayName: string;
	piece: TicTacToePiece;
	gamesWon: number;
}
