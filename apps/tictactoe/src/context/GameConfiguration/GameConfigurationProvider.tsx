import { useReducer } from 'react';
import { GameSize, GameTheme } from '../../enums';
import { GameConfigurationContext } from './GameConfigurationContext';

import { reducer, STORAGE_KEY_SIZE, STORAGE_KEY_THEME } from './reducer';

type GameConfigurationProps = { children: React.ReactNode };

export function GameConfigurationProvider({
	children,
}: GameConfigurationProps) {
	const [state, dispatch] = useReducer(reducer, {
		gameTheme:
			(localStorage.getItem(STORAGE_KEY_THEME) as GameTheme) ||
			GameTheme.HugsKisses,
		gameSize:
			(Number(localStorage.getItem(STORAGE_KEY_SIZE)) as GameSize) ||
			GameSize.x3,
	});

	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch };

	return (
		<GameConfigurationContext.Provider value={value}>
			{children}
		</GameConfigurationContext.Provider>
	);
}
