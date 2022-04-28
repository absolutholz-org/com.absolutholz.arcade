import { useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { GameStateContext } from './GameStateContext';
import { GameConfigurationContext } from '../GameConfiguration';
import { GameState } from '../../enums';
import { IBox } from '../../dataModels';

export function boxConstructor(columnCount: number, rowCount: number): IBox[] {
	const boxes = [];
	for (let iRow = 0, lRow = rowCount; iRow < lRow; iRow++) {
		for (let iCol = 0, lCol = columnCount; iCol < lCol; iCol++) {
			boxes.push({
				id: `${iRow}x${iCol}`,
				columnIndex: iCol,
				rowIndex: iRow,
				borders: {
					[`${iRow}x${iCol}|${iRow}x${iCol + 1}`]: null, // top
					[`${iRow}x${iCol}|${iRow + 1}x${iCol}`]: null, // left
					[`${iRow}x${iCol + 1}|${iRow + 1}x${iCol + 1}`]: null, // right
					[`${iRow + 1}x${iCol}|${iRow + 1}x${iCol + 1}`]: null, // bottom
				},
			});
		}
	}
	return boxes;
}

type GameStateProviderProps = { children: React.ReactNode };

export function GameStateProvider({ children }: GameStateProviderProps) {
	const { state: config } = useContext(GameConfigurationContext);
	const players = [...config.players];

	const [state, dispatch] = useReducer(reducer, {
		gameState: GameState.Playing,
		boxes: boxConstructor(
			config.gameSize.columnCount,
			config.gameSize.rowCount
		),
		currentPlayer: players[0],
		players,
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
