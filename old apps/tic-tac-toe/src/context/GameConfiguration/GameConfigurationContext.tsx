import { createContext } from 'react';

import type { GameSize } from './GameConfiguration.annotations';

export type Action =
	// | {
	// 		type: GameConfigurationAction.SetTheme;
	// 		theme: GameTheme;
	//   }
	{
		type: 'SetSize';
		size: GameSize;
	};

type Dispatch = (action: Action) => void;

export type State = {
	// gameTheme: GameTheme;
	gameSize: GameSize;
};

export const GameConfigurationContext = createContext<{
	state: State;
	dispatch: Dispatch;
}>({
	state: {
		// gameTheme: GameTheme.HugsKisses,
		gameSize: '3x3',
	},
	dispatch: () => {},
});
