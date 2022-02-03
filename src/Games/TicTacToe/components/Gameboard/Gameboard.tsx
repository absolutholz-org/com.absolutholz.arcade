import { useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../../Components/Button';
import { ButtonVariant } from '../../../../Components/Button/IButton';

import { IGameCell } from '../../dataModels/IGameCell';
import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { Cell } from '../Cell';

import * as S from './Gameboard.styled';
import { DEFAULT_CELL_SETUP, useCells, useCurrentPlayer, useGameState } from '../../context/Game';
import { GameState } from '../../enums/GameState';
import { PlayersContext } from '../../context/Players';

export function Gameboard (): JSX.Element {
    const { currentPlayer, setCurrentPlayer } = useCurrentPlayer();
    const { cells, setCells } = useCells();
    const { gameState, setGameState } = useGameState();

    const turnDialogRef = useRef<HTMLDialogElement>(null);
    const endDialogRef = useRef<HTMLDialogElement>(null);

    const { player1, player2 } = useContext(PlayersContext);

    const handleCellClick = (row: number, column: number) => {
        setCells(prevState => (
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
                throw new Error(`Incorrect directional params, row: ${ directionRow }, column: ${ directionColumn }`);
            }

            const neighbor = cells.find(cell => (
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
            setGameState(GameState.Win);
            return;
        }
        
        const foundCells = cells.filter(cell => !(cell.column === column && cell.row === row));
        if (!foundCells.some(cell => cell.piece === undefined)) {
            setGameState(GameState.Draw);
            return;
        }
        
        setCurrentPlayer(player => player === player1 ? player2 : player1);
    };

    const handleTurnButtonClick = () => {
        // @ts-ignore
        turnDialogRef.current.close();
    };

    const handleNewGameButtonClick = () => {
        setCells(DEFAULT_CELL_SETUP);
        setGameState(GameState.Playing);
        setCurrentPlayer(player => player === player1 ? player2 : player1);
    };

    const handleRestartGameButtonClick = () => {
        setCells(DEFAULT_CELL_SETUP);
        setGameState(GameState.Playing);
    };
    
    useEffect(() => {
        // @ts-ignore
        turnDialogRef.current.showModal();
    }, [ currentPlayer ]);

    useEffect(() => {
        if (gameState === GameState.Draw || gameState === GameState.Win) {
            // @ts-ignore
            endDialogRef.current.showModal();
        } else {
            // @ts-ignore
            endDialogRef.current.close();
        }
    }, [ gameState ]);
    
    console.log('RENDER: Gameboard')

    return (
        <>
            <S.Gameboard>
                { cells.map(({row, column, piece}) => (
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
                <Button 
                    inline={ true } 
                    onClick={ handleRestartGameButtonClick }
                >Restart game</Button>
                <Button 
                    inline={ true } 
                    renderAs={ Link } 
                    to='../' 
                    variant={ ButtonVariant.Outlined }
                >Home</Button>
            </div>
            <dialog ref={ turnDialogRef }>
                <div>{ currentPlayer.displayName }'s turn</div>
                <Button onClick={ handleTurnButtonClick }>OK</Button>
            </dialog>
            <dialog ref={ endDialogRef }>
                { gameState === GameState.Draw ?
                    <div>It's a draw!</div>
                    : 
                    <div>{ currentPlayer.displayName } won!</div>
                }
                <Button onClick={ handleNewGameButtonClick }>New game</Button>
            </dialog>
        </>
    )
}
