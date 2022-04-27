import { useContext } from 'react';

import { GameStateContext } from './GameStateContext';

export function useGameState() {
	const context = useContext(GameStateContext);

	if (context === undefined) {
		throw new Error('useGameState must be used within a GameStateProvider');
	}

	const {
		state: { gameState, squares, currentPlayer, players },
		dispatch,
	} = context;

	return { gameState, currentPlayer, dispatch, players, squares };
}
