import { IGameCell } from '../../dataModels/IGameCell';
import { TicTacToePiece } from '../../enums';

export function isNeighborSamePiece(
	cells: IGameCell[],
	piece: TicTacToePiece,
	row: number,
	column: number,
	directionRow: 0 | 1 | -1,
	directionColumn: 0 | 1 | -1
): IGameCell[] {
	let matches: IGameCell[] = [];

	if (directionColumn === 0 && directionRow === 0) {
		throw new Error(
			`Incorrect directional params, row: ${directionRow}, column: ${directionColumn}`
		);
	}

	const neighbor = cells.find(
		(cell) =>
			cell.column === column + directionColumn &&
			cell.row === row + directionRow
	);

	// neighbor matches current player piece, check its neighbor
	if (neighbor?.piece === piece) {
		matches.push(neighbor);
		matches = [
			...matches,
			...isNeighborSamePiece(
				cells,
				piece,
				neighbor.row,
				neighbor.column,
				directionRow,
				directionColumn
			),
		];
	}

	return matches;
}
