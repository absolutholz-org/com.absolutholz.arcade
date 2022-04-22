import { createContext } from 'react';

import { DEFAULT_STATE } from './defaultState';
import { GameConfigurationAction } from './GameConfigurationAction';

type IGameSize = {
	columnCount: number;
	rowCount: number;
};

export type IGameConfigurationAction = {
	type: GameConfigurationAction.SetSize;
	size: IGameSize;
};

export type IGameConfigurationState = {
	gameSize: IGameSize;
};

type IGameConfigurationDispatch = (action: IGameConfigurationAction) => void;

export const GameConfigurationContext = createContext<{
	state: IGameConfigurationState;
	dispatch: IGameConfigurationDispatch;
}>({
	state: DEFAULT_STATE,
	dispatch: () => {},
});
