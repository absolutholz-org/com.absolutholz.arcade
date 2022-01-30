import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TicTacToePiece } from '../../Enums/TicTacToePiece';
import { PlayerConfig } from '../../Components/PlayerConfig';

import { PlayersContext } from '../../Context/Players';

export function Home (): JSX.Element {
    const { player1, setPlayer1, player2, setPlayer2 } = useContext(PlayersContext);
    const navigate = useNavigate();

    const handlePlayer1PieceSelection = (piece: TicTacToePiece): void => {
        setPlayer2((player) => {
            return {
                ...player,
                piece: piece === TicTacToePiece.x ? TicTacToePiece.o : TicTacToePiece.x,
            };
        });

        return;
    }

    const handlePlayer2PieceSelection = (piece: TicTacToePiece): void => {
        setPlayer1((player) => {
            return {
                ...player,
                piece: piece === TicTacToePiece.x ? TicTacToePiece.o : TicTacToePiece.x,
            };
        });

        return;
    }

    const handleStartGame = (event: FormEvent) => {
        event.preventDefault();
        navigate('game');
    };

    return (
        <form onSubmit={ handleStartGame }>
            <h1>Tic Tac Toe</h1>

            <fieldset>
                <legend>Players</legend>

                <PlayerConfig id='1' player={ player1 } setPlayer={ setPlayer1 } onPieceSelection={ handlePlayer1PieceSelection } />

                <PlayerConfig id='2' player={ player2 } setPlayer={ setPlayer2 } onPieceSelection={ handlePlayer2PieceSelection } />
            </fieldset>
            
            <fieldset>
                <legend>Theme</legend>
            </fieldset>

            <fieldset>
                <legend>Rules</legend>
            </fieldset>

            <button disabled={ player1.displayName === '' || player2.displayName === '' }>Start Game</button>
        </form>
    )
}
