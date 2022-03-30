import SvgArrow from 'mdi-react/ChevronDownIcon';

import { IPlayerScoreboardProps } from './IPlayerScoreboard';
import * as S from './PlayerScoreboard.styled';

export function PlayerScoreboard({
	displayName,
	gamesWon,
	isCurrentPlayer,
	piece,
}: IPlayerScoreboardProps): JSX.Element {
	return (
		<S.PlayerScoreboard>
			<S.CurrentPlayerIndicatorWrapper>
				{isCurrentPlayer && (
					<S.CurrentPlayerIndicator icon={SvgArrow} />
				)}
			</S.CurrentPlayerIndicatorWrapper>
			<S.IconWrapper>
				<S.Piece piece={piece} />
			</S.IconWrapper>

			<S.PlayerName>
				<span>{displayName}</span>
			</S.PlayerName>

			{/* <div>won {gamesWon}</div> */}
		</S.PlayerScoreboard>
	);
}
