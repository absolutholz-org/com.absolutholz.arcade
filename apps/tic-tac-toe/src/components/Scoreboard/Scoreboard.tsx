import { IconSize } from '@arcade/components/src/components/Icon/enums/IconSize';
import { TicTacToePiece } from '../../enums';
import { IconO } from '../IconO';
import { IconX } from '../IconX';
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
				{piece === TicTacToePiece.X ? (
					<IconX iconSize={IconSize.x800} />
				) : (
					<IconO iconSize={IconSize.x800} />
				)}
			</S.IconWrapper>

			<S.PlayerName>
				<span>{displayName}</span>
			</S.PlayerName>

			{/* <div>won {gamesWon}</div> */}
		</S.Scoreboard>
	);
}
