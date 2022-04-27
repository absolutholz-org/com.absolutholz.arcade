import { createContext } from 'react';

import { IDotsAndBoxesPlayer, ISquare } from '../../dataModels';
import { GameState } from '../../enums';
import { GameStateAction } from './GameStateAction';

export type IGameStateAction =
	| {
			type: GameStateAction.ConnectDots;
			dot1: {
				x: number;
				y: number;
			};
			dot2: {
				x: number;
				y: number;
			};
	  }
	| {
			type: GameStateAction.NewGame;
	  };

type IGameStateDispatch = (action: IGameStateAction) => void;

export type IGameStateState = {
	gameState: GameState;
	squares: ISquare[];
	currentPlayer: IDotsAndBoxesPlayer;
	players: IDotsAndBoxesPlayer[];
};

export const GameStateContext =
	createContext<
		{ state: IGameStateState; dispatch: IGameStateDispatch } | undefined
	>(undefined);
