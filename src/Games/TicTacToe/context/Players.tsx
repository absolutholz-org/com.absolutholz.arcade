import { useState, createContext, ReactNode, useEffect, Dispatch, SetStateAction, useContext } from "react";
import { UserContext } from "../../../Context/User";

import { ITicTacToePlayer } from "../dataModels/ITicTacToePlayer";
import { TicTacToePiece } from "../enums/TicTacToePiece";

interface IPlayersContext {
    player1: ITicTacToePlayer;
    player2: ITicTacToePlayer;
    setPlayer1: Dispatch<SetStateAction<ITicTacToePlayer>>;
    setPlayer2: Dispatch<SetStateAction<ITicTacToePlayer>>;
}

const defaultState = {
    player1: {
        displayName: '',
        piece: TicTacToePiece.x,
    },
    setPlayer1: () => {},
    player2: {
        displayName: '',
        piece: TicTacToePiece.o,
    },
    setPlayer2: () => {},
}
  
export const PlayersContext = createContext<IPlayersContext>(defaultState);

export function PlayersProvider({ children }: { children: ReactNode }): JSX.Element {
    const [ player1, setPlayer1 ] = useState<ITicTacToePlayer>(defaultState.player1);
    const [ player2, setPlayer2 ] = useState<ITicTacToePlayer>(defaultState.player2);
 
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user?.displayName) {
            const { displayName } = user;
            setPlayer1((player) => {
                return {
                    ...player,
                    displayName,
                };
            });
        }
    }, [ user ]);

    return (
      <PlayersContext.Provider value={{ player1, player2, setPlayer1, setPlayer2 }}>
          { children }
      </PlayersContext.Provider>
    );
}
