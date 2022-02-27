import { Dispatch, SetStateAction } from 'react';

import { ITicTacToePlayer } from '../../dataModels/ITicTacToePlayer';
import { TicTacToePiece } from '../../enums/TicTacToePiece';

export interface IPlayerConfigProps {
	id: string;
	player: ITicTacToePlayer;
	setPlayer: Dispatch<SetStateAction<ITicTacToePlayer>>;
	onPieceSelection: (piece: TicTacToePiece) => void;
}
