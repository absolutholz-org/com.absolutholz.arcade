import { useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { PlayersContext } from '../../context/Players';
import { GameStateContext } from './GameStateContext';
import { GameConfigurationContext } from '../GameConfiguration';
import { GameState } from '../../enums';
import { ISquare } from '../../dataModels';

export function squareConstructor(
	columnCount: number,
	rowCount: number
): ISquare[] {
	const squares = [];
	for (let iRow = 0, lRow = rowCount; iRow < lRow; iRow++) {
		for (let iCol = 0, lCol = columnCount; iCol < lCol; iCol++) {
			squares.push({
				id: `${iRow}x${iCol}`,
				columnIndex: iCol,
				rowIndex: iRow,
				borders: {
					[`${iRow}x${iCol}|${iRow}x${iCol + 1}`]: false, // top
					[`${iRow}x${iCol}|${iRow + 1}x${iCol}`]: false, // left
					[`${iRow}x${iCol + 1}|${iRow + 1}x${iCol + 1}`]: false, // right
					[`${iRow + 1}x${iCol}|${iRow + 1}x${iCol + 1}`]: false, // bottom
				},
			});
		}
	}
	return squares;
}

type GameStateProviderProps = { children: React.ReactNode };

export function GameStateProvider({ children }: GameStateProviderProps) {
	const { state: config } = useContext(GameConfigurationContext);
	const { player1, player2 } = useContext(PlayersContext);

	const [state, dispatch] = useReducer(reducer, {
		gameState: GameState.Playing,
		squares: squareConstructor(
			config.gameSize.columnCount,
			config.gameSize.rowCount
		),
		currentPlayer: player1,
		players: [],
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
