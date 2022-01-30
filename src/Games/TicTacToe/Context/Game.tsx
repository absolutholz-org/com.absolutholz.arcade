// import { turn } from "core-js/library/js/array";
// import { createContext, ReactNode, useContext, useState } from "react";
// import { TicTacToePiece } from "../Enums/TicTacToePiece";

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

// makeMove => update gameboardState; update history; update currentPlayerTurn

export const test: string = '';
