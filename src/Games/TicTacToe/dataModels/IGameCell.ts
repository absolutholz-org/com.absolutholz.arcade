import { TicTacToePiece } from "../enums/TicTacToePiece";

export interface IGameCell {
    row: number;
    column: number;
    piece?: TicTacToePiece;
}
