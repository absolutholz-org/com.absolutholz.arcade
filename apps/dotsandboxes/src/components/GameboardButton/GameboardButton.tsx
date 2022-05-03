import { useEffect } from 'react';

import { IGameboardButtonProps } from './IGameboardButton';
import * as S from './GameboardButton.styled';
import { GameStateAction, useGameState } from '../../context/GameState';

export function GameboardButton({
	startRowID,
	startColumnID,
	endRowID,
	endColumnID,
	color,
	...props
}: IGameboardButtonProps): JSX.Element {
	const { dispatch } = useGameState();

	const handleButtonClick = (): void => {
		dispatch({
			type: GameStateAction.ConnectDots,
			startRowID,
			startColumnID,
			endRowID,
			endColumnID,
		});
	};

	return (
		<S.GameboardButton
			$color={color}
			disabled={!!color}
			id={`${startRowID}x${startColumnID}|${endRowID}x${endColumnID}`}
			onClick={handleButtonClick}
			type='button'
			{...props}
		/>
	);
}
