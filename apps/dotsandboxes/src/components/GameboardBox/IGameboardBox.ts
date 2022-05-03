import { IBox } from '../../dataModels';

export interface IGameboardBoxProps {
	box: IBox;
	isLastRowInColumn: boolean;
	isLastColumnInRow: boolean;
}
