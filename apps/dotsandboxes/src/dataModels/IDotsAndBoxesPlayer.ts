import { PlayerColor } from '../enums';

export type IDotsAndBoxesPlayer = {
	color: PlayerColor;
	displayName: string;
	uuid: string;
	gameLineCount: number;
	gameBoxCount: number;
};
