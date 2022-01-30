import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { PlayersContext } from '../../Context/Players';
import { ITicTacToePlayer } from '../../DataModels/ITicTacToePlayer';
import { TicTacToePiece } from '../../Enums/TicTacToePiece';
import { Cell } from '../Cell';

import * as S from './Gameboard.styled';

interface IGameCell {
    row: number;
    column: number;
    piece?: TicTacToePiece;
}

const GAMEBOARD_DEFAULT_SETUP = [
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

enum Outcome {
    Playing,
    Win,
    Draw,
}

export function Gameboard (): JSX.Element {
    const { player1, player2 } = useContext(PlayersContext);
    const [ gameState, setGameState ] = useState<IGameCell[]>(GAMEBOARD_DEFAULT_SETUP);
    const [ currentPlayer, setCurrentPlayer ] = useState<ITicTacToePlayer>(player1.piece === TicTacToePiece.x ? player1 : player2);
    const turnDialogRef = useRef<HTMLDialogElement>(null);
    const endDialogRef = useRef<HTMLDialogElement>(null);
    const [ outcome, setOutcome ] = useState<Outcome>(Outcome.Playing);

    const handleCellClick = (row: number, column: number) => {
        setGameState(prevState => (
            prevState.map(
              cell => cell.row === row && cell.column === column ? { ...cell, piece: currentPlayer.piece } : cell
            )
        ));

        const isNeighborSamePiece = (
            piece: TicTacToePiece, 
            row: number, 
            column: number, 
            directionRow: 0 | 1 | -1, 
            directionColumn: 0 | 1 | -1
        ): IGameCell[] => {
            let matches: IGameCell[] = [];

            if (directionColumn === 0 && directionRow === 0) {
                throw `Incorrect directional params, row: ${ directionRow }, column: ${ directionColumn }`;
            }

            const neighbor = gameState.find(cell => (
                cell.column === column + directionColumn && 
                cell.row === row + directionRow
            ));
            
            // neighbor matches current player piece, check its neighbor
            if (neighbor?.piece === piece) {
                matches.push(neighbor);
                matches = [...matches, ...isNeighborSamePiece(piece, neighbor.row , neighbor.column, directionRow, directionColumn)];
            }

            return matches;
        }

        const rowMatch: IGameCell[] = [
            ...isNeighborSamePiece(currentPlayer.piece, row, column, 0, 1),
            ...isNeighborSamePiece(currentPlayer.piece, row, column, 0, -1)
        ];
        const colMatch: IGameCell[] = [
            ...isNeighborSamePiece(currentPlayer.piece, row, column, 1, 0),
            ...isNeighborSamePiece(currentPlayer.piece, row, column, -1, 0)
        ];
        const diagonalMatchNWSE: IGameCell[] = [
            ...isNeighborSamePiece(currentPlayer.piece, row, column, -1, -1),
            ...isNeighborSamePiece(currentPlayer.piece, row, column, 1, 1)
        ];
        const diagonalMatchNESW: IGameCell[] = [
            ...isNeighborSamePiece(currentPlayer.piece, row, column, -1, 1),
            ...isNeighborSamePiece(currentPlayer.piece, row, column, 1, -1)
        ];
        
        console.log({rowMatch, colMatch, diagonalMatchNWSE, diagonalMatchNESW});

        if (rowMatch.length === 2 || colMatch.length === 2 || diagonalMatchNWSE.length === 2 || diagonalMatchNESW.length === 2) {
            setOutcome(Outcome.Win);
            return;
        }
        
        const cells = gameState.filter(cell => !(cell.column === column && cell.row === row));
        if (!cells.some(cell => cell.piece === undefined)) {
            setOutcome(Outcome.Draw);
            return;
        }
        
        setCurrentPlayer(player => player === player1 ? player2 : player1);
    };

    const handleTurnButtonClick = () => {
        // @ts-ignore
        turnDialogRef.current.close();
    };

    const handleNewGameButtonClick = () => {
        setGameState(GAMEBOARD_DEFAULT_SETUP);
        setOutcome(Outcome.Playing);
        setCurrentPlayer(player => player === player1 ? player2 : player1);
    };

    const handleRestartGameButtonClick = () => {
        setGameState(GAMEBOARD_DEFAULT_SETUP);
        setOutcome(Outcome.Playing);
    };
    
    useEffect(() => {
        // @ts-ignore
        turnDialogRef.current.showModal();
    }, [ currentPlayer ]);

    useEffect(() => {
        if (outcome === Outcome.Draw || outcome === Outcome.Win) {
            // @ts-ignore
            endDialogRef.current.showModal();
        } else {
            // @ts-ignore
            endDialogRef.current.close();
        }
    }, [ outcome ]);
    
    console.log('RENDER: Gameboard')

    return (
        <>
            <S.Gameboard>
                { gameState.map(({row, column, piece}) => (
                    <Cell 
                        column={ column } 
                        row={ row } 
                        onClick={ handleCellClick } 
                        mark={ piece }
                        key={ `tictactoe-cell-${ row }x${ column }` }
                    />
                ))}
            </S.Gameboard>
            <div>
                <button onClick={ handleRestartGameButtonClick }>Restart game</button>
                <Link to='../'>Home</Link>
            </div>
            <dialog ref={ turnDialogRef }>
                <div>{ currentPlayer.displayName }'s turn</div>
                <button onClick={ handleTurnButtonClick }>OK</button>
            </dialog>
            <dialog ref={ endDialogRef }>
                { outcome === Outcome.Draw ?
                    <div>It's a draw!</div>
                    : 
                    <div>{ currentPlayer.displayName } won!</div>
                }
                <button onClick={ handleNewGameButtonClick }>New game</button>
            </dialog>
        </>
    )
}
