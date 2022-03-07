import { IScoreboardProps } from './IScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard({
	displayName,
	piece,
	gamesWon,
}: IScoreboardProps): JSX.Element {
	return (
		<S.Scoreboard>
			<S.IconWrapper>
				<S.Icon piece={piece} />
			</S.IconWrapper>

			<S.PlayerName>
				<span>{displayName}</span>
			</S.PlayerName>

			{/* <div>won {gamesWon}</div> */}
		</S.Scoreboard>
	);
}
