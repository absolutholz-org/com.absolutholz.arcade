import { useContext } from 'react';

import { GameConfigurationContext } from './GameConfigurationContext';

export function useGameConfiguration() {
	const context = useContext(GameConfigurationContext);

	if (context === undefined) {
		throw new Error('useGameConfiguration must be used within a GameConfigurationProvider');
	}

	const {
		state: { /* gameTheme, */ gameSize },
		dispatch,
	} = context;

	return { /* gameTheme, */ gameSize, dispatch };
}
