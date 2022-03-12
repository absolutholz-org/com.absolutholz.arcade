import { IPlayerScoreboardProps } from './IPlayerScoreboard';
import * as S from './PlayerScoreboard.styled';

export function PlayerScoreboard({
	displayName,
	piece,
	gamesWon,
}: IPlayerScoreboardProps): JSX.Element {
	return (
		<S.PlayerScoreboard>
			<S.IconWrapper>
				<S.Icon piece={piece} />
			</S.IconWrapper>

			<S.PlayerName>
				<span>{displayName}</span>
			</S.PlayerName>

			{/* <div>won {gamesWon}</div> */}
		</S.PlayerScoreboard>
	);
}
