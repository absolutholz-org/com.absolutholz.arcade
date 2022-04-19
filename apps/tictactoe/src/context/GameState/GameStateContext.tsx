import { createContext } from 'react';

import { ITicTacToePlayer } from '../../dataModels/ITicTacToePlayer';
import { IGameCell } from '../../dataModels/IGameCell';
import { GameAction, GameState } from '../../enums';

export type Action = {
	type: GameAction;
	payload?: {
		cell?: IGameCell;
	};
};

type Dispatch = (action: Action) => void;

export type State = {
	gameState: GameState;
	cells: IGameCell[];
	currentPlayer: ITicTacToePlayer;
	players: {
		player1: ITicTacToePlayer;
		player2: ITicTacToePlayer;
	};
};

export const GameStateContext =
	createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);
