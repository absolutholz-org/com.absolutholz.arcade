import { createContext } from 'react';
import { IDotsAndBoxesPlayer } from '../../dataModels';

import { DEFAULT_STATE } from './defaultState';
import { GameConfigurationAction } from './GameConfigurationAction';

type IGameSize = {
	columnCount: number;
	rowCount: number;
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
			player: IDotsAndBoxesPlayer;
	  }
	| {
			type: GameConfigurationAction.DeletePlayer;
			player: IDotsAndBoxesPlayer;
	  };

export type IGameConfigurationState = {
	gameSize: IGameSize;
	players: IDotsAndBoxesPlayer[];
};

type IGameConfigurationDispatch = (action: IGameConfigurationAction) => void;

export const GameConfigurationContext = createContext<{
	state: IGameConfigurationState;
	dispatch: IGameConfigurationDispatch;
}>({
	state: DEFAULT_STATE,
	dispatch: () => {},
});
