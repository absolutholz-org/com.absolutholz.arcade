import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DialogConfirm, NotificationTurn } from '@arcade/library-components';

import { useGameState } from '../../context/GameState';
import { GameAction } from '../../enums/GameAction';
import { GameState } from '../../enums/GameState';

import { Cell } from '../Cell';

import * as S from './Gameboard.styled';

export function Gameboard({ ...props }): JSX.Element {
	const { gameState, cells, currentPlayer, dispatch } = useGameState();

	const [isEndGameDialogOpen, setIsEndGameDialogOpen] = useState(false);
	// const [isTurnDialogOpen, setIsTurnDialogOpen] = useState(false);
	const navigate = useNavigate();

	const handleCellClick = (row: number, column: number) => {
		dispatch({ type: GameAction.Move, payload: { cell: { row, column } } });
	};

	// const handleTurnButtonClick = () => {
	// 	setIsTurnDialogOpen(false);
	// };

	const handleNewGameButtonClick = () => {
		dispatch({ type: GameAction.NewGame });
	};

	const handleRestartGameButtonClick = () => {
		dispatch({ type: GameAction.Restart });
	};

	const handleLeaveGameButtonClick = () => {
		navigate('/');
	};

	// useEffect(() => {
	// 	setIsTurnDialogOpen(true);
	// }, [currentPlayer]);

	useEffect(() => {
		if (gameState === GameState.Draw || gameState === GameState.Win) {
			setIsEndGameDialogOpen(true);
		} else {
			setIsEndGameDialogOpen(false);
		}
	}, [gameState]);

	return (
		<>
			<S.Gameboard {...props}>
				{cells.map(({ row, column, piece }) => (
					<Cell
						column={column}
						row={row}
						onClick={handleCellClick}
						mark={piece}
						key={`tictactoe-cell-${row}x${column}`}
					/>
				))}
			</S.Gameboard>

			{/* <S.Buttons>
				<Button
					inline={true}
					onClick={handleRestartGameButtonClick}
					variant={ButtonVariant.Outlined}>
					Restart game
				</Button>
				<Button
					inline={true}
					renderAs={Link}
					to='../'
					variant={ButtonVariant.Outlined}>
					Home
				</Button>
			</S.Buttons> */}

			{/* <DialogAlert
				isOpen={isTurnDialogOpen}
				onConfirm={handleTurnButtonClick}>
				<div>{currentPlayer.displayName}'s turn</div>
			</DialogAlert> */}

			<DialogConfirm
				isOpen={isEndGameDialogOpen}
				onConfirm={handleNewGameButtonClick}
				slotConfirmButton='New game'
				onCancel={handleLeaveGameButtonClick}
				slotCancelButton='No thanks'>
				{gameState === GameState.Draw ? (
					<div>It's a draw!</div>
				) : (
					<div>{currentPlayer.displayName} won!</div>
				)}
				<div>Play again?</div>
			</DialogConfirm>

			<NotificationTurn playerName={currentPlayer.displayName} />
		</>
	);
}
