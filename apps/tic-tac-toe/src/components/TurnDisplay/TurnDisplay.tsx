import { useGameState } from '../../context/Game';

import * as S from './TurnDisplay.styled';

export function TurnDisplay({ ...props }): JSX.Element {
	const { currentPlayer } = useGameState();

	return (
		<S.TurnDisplay {...props}>
			{currentPlayer.displayName}'s turn
		</S.TurnDisplay>
	);
}
