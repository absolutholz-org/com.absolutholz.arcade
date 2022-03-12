import { useGameState } from '../../context/Game';
import { PlayerScoreboard } from '../PlayerScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard(): JSX.Element {
	const {
		players: { player1, player2 },
	} = useGameState();

	return (
		<S.Scoreboard>
			<PlayerScoreboard
				displayName={player1.displayName}
				gamesWon={0}
				piece={player1.piece}
			/>
			<PlayerScoreboard
				displayName={player2.displayName}
				gamesWon={0}
				piece={player2.piece}
			/>
		</S.Scoreboard>
	);
}
