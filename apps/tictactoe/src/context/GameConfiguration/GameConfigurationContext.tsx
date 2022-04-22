import { createContext } from 'react';

import { GameConfigurationAction, GameSize, GameTheme } from '../../enums';

export type Action =
	| {
			type: GameConfigurationAction.SetTheme;
			theme: GameTheme;
	  }
	| {
			type: GameConfigurationAction.SetSize;
			size: GameSize;
	  };

type Dispatch = (action: Action) => void;

export type State = {
	gameTheme: GameTheme;
	gameSize: GameSize;
};

export const GameConfigurationContext = createContext<{
	state: State;
	dispatch: Dispatch;
}>({
	state: { gameTheme: GameTheme.HugsKisses, gameSize: GameSize.x3 },
	dispatch: () => {},
});
