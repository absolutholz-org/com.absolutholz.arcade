import { Dispatch, SetStateAction } from 'react';

import { IDotsAndBoxesPlayer } from '../../dataModels/IDotsAndBoxesPlayer';

export interface IPlayerConfigProps {
	id: string;
	player: IDotsAndBoxesPlayer;
	setPlayer: Dispatch<SetStateAction<IDotsAndBoxesPlayer>>;
}
