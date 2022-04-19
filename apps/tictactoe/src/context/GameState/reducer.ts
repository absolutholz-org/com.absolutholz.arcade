import { IGameCell } from '../../dataModels/IGameCell';
import { GameAction, GameState } from '../../enums';
import { Action, State } from './GameStateContext';
import { DEFAULT_CELL_SETUP } from './GameStateProvider';
import { isNeighborSamePiece } from './isNeighborSamePiece';

export function reducer(state: State, action: Action) {
	const { type, payload } = action;

	switch (type) {
		case GameAction.Move: {
			if (payload?.cell === undefined) {
				return state;
			}

			const { row, column } = payload.cell;
			const cells = state.cells.map((cell) =>
				cell.row === row && cell.column === column
					? { ...cell, piece: state.currentPlayer.piece }
					: cell
			);

			const rowMatch: IGameCell[] = [
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					0,
					1
				),
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					0,
					-1
				),
			];
			const colMatch: IGameCell[] = [
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					1,
					0
				),
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					-1,
					0
				),
			];
			const diagonalMatchNWSE: IGameCell[] = [
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					-1,
					-1
				),
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					1,
					1
				),
			];
			const diagonalMatchNESW: IGameCell[] = [
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					-1,
					1
				),
				...isNeighborSamePiece(
					cells,
					state.currentPlayer.piece,
					row,
					column,
					1,
					-1
				),
			];

			let gameState = state.gameState;

			const foundCells = cells.filter(
				(cell) => !(cell.column === column && cell.row === row)
			);
			if (!foundCells.some((cell) => cell.piece === undefined)) {
				gameState = GameState.Draw;
				return { ...state, cells, gameState };
			}

			if (
				rowMatch.length === 2 ||
				colMatch.length === 2 ||
				diagonalMatchNWSE.length === 2 ||
				diagonalMatchNESW.length === 2
			) {
				gameState = GameState.Win;
				return { ...state, cells, gameState };
			}

			const currentPlayer =
				state.currentPlayer === state.players.player1
					? state.players.player2
					: state.players.player1;

			return { ...state, cells, currentPlayer, gameState };
		}

		case GameAction.NewGame: {
			const cells = DEFAULT_CELL_SETUP;
			const gameState = GameState.Playing;
			const currentPlayer =
				state.currentPlayer === state.players.player1
					? state.players.player2
					: state.players.player1;

			return { ...state, cells, currentPlayer, gameState };
		}

		case GameAction.Restart: {
			const cells = DEFAULT_CELL_SETUP;
			const gameState = GameState.Playing;

			return { ...state, cells, gameState };
		}

		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}
