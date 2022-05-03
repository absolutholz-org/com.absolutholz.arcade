import { createContext } from 'react';

import { IDotsAndBoxesPlayer, IBox } from '../../dataModels';
import { GameState } from '../../enums';
import { GameStateAction } from './GameStateAction';

export type IGameStateAction =
	| {
			type: GameStateAction.ConnectDots;
			startRowID: number;
			startColumnID: number;
			endRowID: number;
			endColumnID: number;
	  }
	| {
			type: GameStateAction.NewGame;
	  };

type IGameStateDispatch = (action: IGameStateAction) => void;

export type IGameStateState = {
	gameState: GameState;
	boxes: IBox[];
	currentPlayer: IDotsAndBoxesPlayer;
	players: IDotsAndBoxesPlayer[];
};

export const GameStateContext =
	createContext<
		{ state: IGameStateState; dispatch: IGameStateDispatch } | undefined
	>(undefined);
