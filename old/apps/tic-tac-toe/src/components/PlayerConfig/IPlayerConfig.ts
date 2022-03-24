import { Dispatch, SetStateAction } from 'react';

import { ITicTacToePlayer } from '../../dataModels/ITicTacToePlayer';

export interface IPlayerConfigProps {
	id: string;
	player: ITicTacToePlayer;
	setPlayer: Dispatch<SetStateAction<ITicTacToePlayer>>;
}
