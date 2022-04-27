import { IDotsAndBoxesPlayer } from './IDotsAndBoxesPlayer';

export type ISquare = {
	id: string;
	columnIndex: number;
	rowIndex: number;
	borders: {
		[key: string]: boolean;
	};
	player?: IDotsAndBoxesPlayer;
};
