import { useReducer } from 'react';

import { DEFAULT_STATE } from './defaultState';
import { GameConfigurationContext } from './GameConfigurationContext';
import { reducer } from './reducer';
import { getFromStorage } from './storage';

type IGameConfigurationProps = { children: React.ReactNode };

export function GameConfigurationProvider({
	children,
}: IGameConfigurationProps) {
	const [state, dispatch] = useReducer(
		reducer,
		getFromStorage() || DEFAULT_STATE
	);

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };

	return (
		<GameConfigurationContext.Provider value={value}>
			{children}
		</GameConfigurationContext.Provider>
	);
}
