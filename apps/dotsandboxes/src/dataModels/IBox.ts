import { PlayerColor } from '@arcade/library-common';

import { IDotsAndBoxesPlayer } from './IDotsAndBoxesPlayer';

export type IBox = {
	id: string;
	columnIndex: number;
	rowIndex: number;
	borders: {
		[key: string]: PlayerColor | null;
	};
	player?: IDotsAndBoxesPlayer;
};
