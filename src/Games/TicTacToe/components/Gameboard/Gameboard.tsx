import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/IButton';
import { Dialog } from '../../../../components/Dialog';

import { useGameState } from '../../context/Game';
import { GameAction } from '../../enums/GameAction';
import { GameState } from '../../enums/GameState';

import { Cell } from '../Cell';

import * as S from './Gameboard.styled';

export function Gameboard (): JSX.Element {
    const { gameState, cells, currentPlayer, dispatch } = useGameState();

    const [ isEndGameDialogOpen, setIsEndGameDialogOpen ] = useState(false);
    const [ isTurnDialogOpen, setIsTurnDialogOpen ] = useState(false);

    const handleCellClick = (row: number, column: number) => {
        dispatch({ type: GameAction.Move, payload: { cell: { row, column } } });
    };

    const handleTurnButtonClick = () => {
        setIsTurnDialogOpen(false);
    };

    const handleNewGameButtonClick = () => {
        dispatch({ type: GameAction.NewGame });
    };

    const handleRestartGameButtonClick = () => {
        dispatch({ type: GameAction.Restart });
    };
    
    useEffect(() => {
        console.log({ currentPlayer });
        setIsTurnDialogOpen(true);
    }, [ currentPlayer ]);

    useEffect(() => {
        console.log({ gameState });
        if (gameState === GameState.Draw || gameState === GameState.Win) {
            setIsEndGameDialogOpen(true);
        } else {
            setIsEndGameDialogOpen(false);
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

            <Dialog 
                isOpen={ isTurnDialogOpen } 
                slotFooter={
                    <Button onClick={ handleTurnButtonClick }>OK</Button>
                }
            >
                <div>{ currentPlayer.displayName }'s turn</div>
            </Dialog>
            
            <Dialog 
                isOpen={ isEndGameDialogOpen }
                slotFooter={
                    <Button onClick={ handleNewGameButtonClick }>New game</Button>
                }
            >
                { gameState === GameState.Draw ?
                    <div>It's a draw!</div>
                    : 
                    <div>{ currentPlayer.displayName } won!</div>
                }
            </Dialog>
        </>
    )
}
