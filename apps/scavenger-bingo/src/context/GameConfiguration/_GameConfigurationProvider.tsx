import { useState } from 'react';

import { DEFAULT_PARAMETERS } from '../../App.constants';
import type { FreeSpacePosition, WinningCombination } from '../../App.types';
import GameConfigurationContext from './_GameConfigurationContext';
import type { GameConfigurationProviderProps } from './_GameConfigurationProvider.types';

export const GameConfigurationContextProvider = ({
	children,
}: GameConfigurationProviderProps): JSX.Element => {
	const [gameId, setGameId] = useState<string | null>(null);
	const [gameConfiguration, setGameConfiguration] = useState<{
		winningCombinations: WinningCombination[];
		freeSpacePosition: FreeSpacePosition;
	}>(DEFAULT_PARAMETERS);

	return (
		<GameConfigurationContext.Provider
			value={{
				gameId,
				setGameId,
				gameConfiguration,
				setGameConfiguration,
			}}>
			{children}
		</GameConfigurationContext.Provider>
	);
};
