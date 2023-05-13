import { useReducer } from 'react';

import type { GameSize } from './GameConfiguration.annotations';
import { STORAGE_KEY_SIZE } from './GameConfiguration.annotations';
import { GameConfigurationContext } from './GameConfigurationContext';
import { reducer } from './reducer';

type GameConfigurationProps = { children: React.ReactNode };

export function GameConfigurationProvider({ children }: GameConfigurationProps) {
	const [state, dispatch] = useReducer(reducer, {
		// gameTheme:
		// 	(localStorage.getItem(STORAGE_KEY_THEME) as GameTheme) ||
		// 	GameTheme.HugsKisses,
		gameSize: (localStorage.getItem(STORAGE_KEY_SIZE) as GameSize) || '3x3',
	});

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };

	return <GameConfigurationContext.Provider value={value}>{children}</GameConfigurationContext.Provider>;
}
