import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../../Components/Button';
import { ButtonVariant } from '../../../../Components/Button/IButton';

import { useGameState } from '../../context/Game';
import { GameAction } from '../../enums/GameAction';
import { GameState } from '../../enums/GameState';

import { Cell } from '../Cell';

import * as S from './Gameboard.styled';

export function Gameboard (): JSX.Element {
    const { gameState, cells, currentPlayer, dispatch } = useGameState();

    const turnDialogRef = useRef<HTMLDialogElement>(null);
    const endDialogRef = useRef<HTMLDialogElement>(null);

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

            <dialog ref={ turnDialogRef } open={ isTurnDialogOpen }>
                <div>{ currentPlayer.displayName }'s turn</div>
                <Button onClick={ handleTurnButtonClick }>OK</Button>
            </dialog>
            
            <dialog ref={ endDialogRef } open={ isEndGameDialogOpen }>
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
