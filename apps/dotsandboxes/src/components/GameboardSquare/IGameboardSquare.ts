import { ISquare } from '../../context/Game';

export interface IGameboardSquareProps {
	square: ISquare;
	isLastRowInColumn: boolean;
	isLastColumnInRow: boolean;
}
