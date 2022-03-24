import { createContext, useContext, useReducer } from 'react';

import { GameTheme, GameConfigurationAction } from '../enums';

interface Action {
	type: GameConfigurationAction;
	payload: {
		theme: GameTheme;
	};
}
type Dispatch = (action: Action) => void;
type State = {
	gameTheme: GameTheme;
};
type GameConfigurationProps = { children: React.ReactNode };

const STORAGE_KEY_THEME = 'absolutholz.arcade.tictactoe:theme';

const GameConfigurationContext = createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

function gameReducer(state: State, action: Action) {
	const { type, payload } = action;

	switch (type) {
		case GameConfigurationAction.SetTheme: {
			localStorage.setItem(STORAGE_KEY_THEME, payload.theme);
			return { ...state, gameTheme: payload.theme };
		}
		default: {
			throw new Error(`Unhandled action type: ${type}`);
		}
	}
}

export function GameConfigurationProvider({
	children,
}: GameConfigurationProps) {
	const [state, dispatch] = useReducer(gameReducer, {
		gameTheme:
			(localStorage.getItem(STORAGE_KEY_THEME) as GameTheme) ||
			GameTheme.HugsKisses,
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

export function useGameConfiguration() {
	const context = useContext(GameConfigurationContext);

	if (context === undefined) {
		throw new Error(
			'useGameConfiguration must be used within a GameConfigurationProvider'
		);
	}

	const {
		state: { gameTheme },
		dispatch,
	} = context;

	return { gameTheme, dispatch };
}
