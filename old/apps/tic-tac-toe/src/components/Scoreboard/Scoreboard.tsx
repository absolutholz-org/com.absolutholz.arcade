import { useGameState } from '../../context/Game';
import { PlayerScoreboard } from '../PlayerScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard(): JSX.Element {
	const {
		currentPlayer,
		players: { player1, player2 },
	} = useGameState();

	return (
		<S.Scoreboard>
			<PlayerScoreboard
				displayName={player1.displayName}
				gamesWon={0}
				isCurrentPlayer={player1 === currentPlayer}
				piece={player1.piece}
			/>
			<PlayerScoreboard
				displayName={player2.displayName}
				gamesWon={0}
				isCurrentPlayer={player2 === currentPlayer}
				piece={player2.piece}
			/>
		</S.Scoreboard>
	);
}
