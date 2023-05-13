import { useContext } from 'react';

import GameContext from './_GameContext';

export function useGameContext() {
	const context = useContext(GameContext);

	if (context === undefined) {
		throw new Error(
			'useGameContext must be used within a GameContextProvider'
		);
	}

	const { gameBoard, gameStatus, markSymbolClosed } = context;

	return { gameBoard, gameStatus, markSymbolClosed };
}
