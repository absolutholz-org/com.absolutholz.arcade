// import { turn } from "core-js/library/js/array";
// import { createContext, ReactNode, useContext, useState } from "react";
// import { TicTacToePiece } from "../Enums/TicTacToePiece";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

import { PlayersContext } from '../context/Players';
import { ITicTacToePlayer } from "../dataModels/ITicTacToePlayer";
import { IGameCell } from "../dataModels/IGameCell";
import { GameState } from "../enums/GameState";
import { TicTacToePiece } from "../enums/TicTacToePiece";

interface IGameContext {
    gameState: GameState,
    setGameState: Dispatch<SetStateAction<GameState>>;
    cells: IGameCell[],
    setCells: Dispatch<SetStateAction<IGameCell[]>>;
    currentPlayer: ITicTacToePlayer,
    setCurrentPlayer: Dispatch<SetStateAction<ITicTacToePlayer>>;
}

export const DEFAULT_CELL_SETUP = [
    {
        row: 0,
        column: 0,
    },
    {
        row: 0,
        column: 1,
    },
    {
        row: 0,
        column: 2,
    },
    {
        row: 1,
        column: 0,
    },
    {
        row: 1,
        column: 1,
    },
    {
        row: 1,
        column: 2,
    },
    {
        row: 2,
        column: 0,
    },
    {
        row: 2,
        column: 1,
    },
    {
        row: 2,
        column: 2,
    },
];

export const GameContext = createContext<IGameContext>({
    gameState: GameState.Paused,
    setGameState: () => {},
    cells: DEFAULT_CELL_SETUP,
    setCells: () => {},
    currentPlayer: {
        displayName: '',
        piece: TicTacToePiece.x,
    },
    setCurrentPlayer: () => {},
});

export function CountProvider({ children }: { children: ReactNode }): JSX.Element {
    const [ cells, setCells ] = useState<IGameCell[]>(DEFAULT_CELL_SETUP);
    const [ gameState, setGameState ] = useState<GameState>(GameState.Paused);
    const { player1, player2 } = useContext(PlayersContext);
    const [ currentPlayer, setCurrentPlayer ] = useState<ITicTacToePlayer>(player1.piece === TicTacToePiece.x ? player1 : player2);

    return (
      <GameContext.Provider value={{ cells, setCells, gameState, setGameState, currentPlayer, setCurrentPlayer }}>
        { children }
      </GameContext.Provider>
    );
}

export function useCells () {
    const { cells, setCells } = useContext(GameContext);

    if (cells === undefined || setCells === undefined) {
      throw new Error('useCells must be used within a GameProvider')
    }

    return { cells, setCells };
}

export function useCurrentPlayer () {
    const { currentPlayer, setCurrentPlayer } = useContext(GameContext);

    if (currentPlayer === undefined || setCurrentPlayer === undefined) {
      throw new Error('useCurrentPlayer must be used within a GameProvider')
    }

    return { currentPlayer, setCurrentPlayer };
}

export function useGameState () {
    const { gameState, setGameState } = useContext(GameContext);

    if (gameState === undefined || setGameState === undefined) {
      throw new Error('useGameState must be used within a GameProvider')
    }

    return { gameState, setGameState };
}
  

// interface IGameContext {
//     currentPlayer: IPlayer;
//     gameboardState: {
//         piece: TicTacToePiece | null;
//     }[];
//     history: {
//         player: IPlayer;
//         position: {
//             row: number;
//             column: number;
//         }
//     }[];
// }

// const GameContext = createContext<IGameContext | undefined>(undefined);

// export enum GameAction {
//     Move,
// }

// function gameReducer(state, action) {
//     switch (action.type) {
//       case GameAction.Move: {
//         return {count: state.count + 1}
//       }
//       default: {
//         throw new Error(`Unhandled action type: ${action.type}`)
//       }
//     }
//   }

// export function GameProvider({ children }: { children: ReactNode }): JSX.Element {

//     return (
//       <GameContext.Provider value={{  }}>
//           { children }
//       </GameContext.Provider>
//     );
// }

// export function usePlayerTurn () {
//     const context = useContext(PlayerTurnContext);

//     if (context === undefined) {
//       throw new Error('usePlayerTurn must be used within a PlayerTurnProvider');
//     }

//     return context
// }

// gamestate: {
//     currentPlayerTurn: Player
//     gameboardState: [
//         {
//             piece: TicTacToePiece | null
//         },
//         {
//             piece: TicTacToePiece | null
//         },
//         {
//             piece: TicTacToePiece | null
//         },
//         ...
//     ]
//     history: [
//         {
//             player: Player,
//             position: {
//                 row: number
//                 column: number
//             }
//         }
//     ]
// }
