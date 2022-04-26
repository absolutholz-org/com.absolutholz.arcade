import { createContext } from 'react';

import { DEFAULT_STATE } from './defaultState';
import { GameConfigurationAction } from './GameConfigurationAction';

type IGameSize = {
	columnCount: number;
	rowCount: number;
};

export type IPlayer = {
	uuid: string;
	displayName: string;
	color: string;
};

export type IGameConfigurationAction =
	| {
			type: GameConfigurationAction.SetSize;
			size: IGameSize;
	  }
	| {
			type: GameConfigurationAction.CreatePlayer;
	  }
	| {
			type: GameConfigurationAction.UpdatePlayer;
			player: IPlayer;
	  }
	| {
			type: GameConfigurationAction.DeletePlayer;
			player: IPlayer;
	  };

export type IGameConfigurationState = {
	gameSize: IGameSize;
	players: IPlayer[];
};

type IGameConfigurationDispatch = (action: IGameConfigurationAction) => void;

export const GameConfigurationContext = createContext<{
	state: IGameConfigurationState;
	dispatch: IGameConfigurationDispatch;
}>({
	state: DEFAULT_STATE,
	dispatch: () => {},
});
