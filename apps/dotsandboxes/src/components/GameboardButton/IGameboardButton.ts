import { PlayerColor } from '../../enums';

export interface IGameboardButtonProps {
	startRowID: number;
	startColumnID: number;
	endRowID: number;
	endColumnID: number;
	color: PlayerColor | null;
}
