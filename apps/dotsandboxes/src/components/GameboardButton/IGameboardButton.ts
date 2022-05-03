import { PlayerColor } from '@arcade/library-common';

export interface IGameboardButtonProps {
	startRowID: number;
	startColumnID: number;
	endRowID: number;
	endColumnID: number;
	color: PlayerColor | null;
}
