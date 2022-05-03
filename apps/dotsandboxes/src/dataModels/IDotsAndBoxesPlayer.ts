import { PlayerColor } from '@arcade/library-common';

export type IDotsAndBoxesPlayer = {
	color: PlayerColor;
	displayName: string;
	uuid: string;
	gameLineCount: number;
	gameBoxCount: number;
};
