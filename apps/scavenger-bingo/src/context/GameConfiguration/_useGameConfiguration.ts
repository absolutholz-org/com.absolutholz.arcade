import { useContext } from 'react';

import GameConfigurationContext from './_GameConfigurationContext';

export function useGameConfigurationContext() {
	const context = useContext(GameConfigurationContext);

	if (context === undefined) {
		throw new Error(
			'useGameConfiguration must be used within a GameConfigurationProvider'
		);
	}

	const { gameId, setGameId, gameConfiguration, setGameConfiguration } =
		context;

	return {
		gameId,
		setGameId,
		gameConfiguration,
		setGameConfiguration,
	};
}
