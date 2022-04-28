import { useEffect, useState } from 'react';

import { IGameboardButtonProps } from './IGameboardButton';
import * as S from './GameboardButton.styled';
import { GameStateAction, useGameState } from '../../context/GameState';

export function GameboardButton({
	startRowID,
	startColumnID,
	endRowID,
	endColumnID,
	...props
}: IGameboardButtonProps): JSX.Element {
	const [isDisabled, setIsDisabled] = useState(false);
	const [color, setColor] = useState('');
	const { currentPlayer, dispatch } = useGameState();

	const handleButtonClick = (): void => {
		if (currentPlayer) {
			setColor(currentPlayer.color);
			setIsDisabled(true);
			dispatch({
				type: GameStateAction.ConnectDots,
				startRowID,
				startColumnID,
				endRowID,
				endColumnID,
			});
		}
	};

	useEffect(() => {
		setIsDisabled(false);
	}, []);

	return (
		<S.GameboardButton
			$color={color}
			disabled={isDisabled}
			id={`${startRowID}x${startColumnID}|${endRowID}x${endColumnID}`}
			onClick={handleButtonClick}
			type='button'
			{...props}
		/>
	);
}
