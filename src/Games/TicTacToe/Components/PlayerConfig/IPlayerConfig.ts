import { Dispatch, SetStateAction } from 'react';

import { ITicTacToePlayer } from '../../DataModels/ITicTacToePlayer';
import { TicTacToePiece } from '../../Enums/TicTacToePiece';

export interface IPlayerConfigProps {
    id: string;
    player: ITicTacToePlayer;
    setPlayer: Dispatch<SetStateAction<ITicTacToePlayer>>;
    onPieceSelection: (piece: TicTacToePiece) => void;
}
