import { createContext } from 'react';

import { GameTheme, GameConfigurationAction } from '../../enums';

export interface Action {
	type: GameConfigurationAction;
	payload: {
		theme: GameTheme;
	};
}

type Dispatch = (action: Action) => void;

export type State = {
	gameTheme: GameTheme;
};

export const GameConfigurationContext =
	createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);
