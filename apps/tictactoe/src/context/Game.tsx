import { createContext, useContext, useReducer } from 'react';

import { PlayersContext } from '../context/Players';
import { ITicTacToePlayer } from '../dataModels/ITicTacToePlayer';
import { IGameCell } from '../dataModels/IGameCell';
import { GameAction, GameState, TicTacToePiece } from '../enums';

const DEFAULT_CELL_SETUP = Array.from(Array(3))
	.map((n, row, array) => {
		return Array.from(Array(array.length)).map((n, col) => {
			return {
				row: row % array.length,
				column: col % array.length,
			};
		});
	})
	.flat();

interface Action {
	type: GameAction;
	payload?: {
		cell?: IGameCell;
	};
}
type Dispatch = (action: Action) => void;
type State = {
	gameState: GameState;
	cells: IGameCell[];
	currentPlayer: ITicTacToePlayer;
	players: {
		player1: ITicTacToePlayer;
		player2: ITicTacToePlayer;
	};
};
type GameProviderProps = { children: React.ReactNode };

const GameStateContext = createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

const isNeighborSamePiece = (
	cells: IGameCell[],
	piece: TicTacToePiece,
	row: number,
	column: number,
	directionRow: 0 | 1 | -1,
	directionColumn: 0 | 1 | -1
): IGameCell[] => {
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
};

function gameReducer(state: State, action: Action) {
	const { type, payload } = action;
	console.log({ state, type, payload });

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

			console.log({
				rowMatch,
				colMatch,
				diagonalMatchNWSE,
				diagonalMatchNESW,
			});

			let gameState = state.gameState;

			const foundCells = cells.filter(
				(cell) => !(cell.column === column && cell.row === row)
			);
			if (!foundCells.some((cell) => cell.piece === undefined)) {
				gameState = GameState.Draw;
			}

			if (
				rowMatch.length === 2 ||
				colMatch.length === 2 ||
				diagonalMatchNWSE.length === 2 ||
				diagonalMatchNESW.length === 2
			) {
				gameState = GameState.Win;
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

export function GameProvider({ children }: GameProviderProps) {
	const { player1, player2 } = useContext(PlayersContext);
	const [state, dispatch] = useReducer(gameReducer, {
		gameState: GameState.Playing,
		cells: DEFAULT_CELL_SETUP,
		currentPlayer: player1.piece === TicTacToePiece.X ? player1 : player2,
		players: {
			player1,
			player2,
		},
	});

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };

	return (
		<GameStateContext.Provider value={value}>
			{children}
		</GameStateContext.Provider>
	);
}

export function useGameState() {
	const context = useContext(GameStateContext);

	if (context === undefined) {
		throw new Error('useGameState must be used within a GameStateProvider');
	}

	const {
		state: { gameState, cells, currentPlayer, players },
		dispatch,
	} = context;

	return { gameState, cells, currentPlayer, dispatch, players };
}
