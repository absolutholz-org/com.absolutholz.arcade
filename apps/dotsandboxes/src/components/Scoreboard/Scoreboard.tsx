import { NotificationTurn } from '@arcade/library-components';

import { useGameState } from '../../context/GameState';
import { IScoreboardProps } from './IScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard({ ...props }: IScoreboardProps): JSX.Element {
	const { players, currentPlayer } = useGameState();

	return (
		<>
			<S.ScoreboardGrid {...props}>
				{players &&
					players.map((player) => (
						<section key={`scoreboard-player_${player.uuid}`}>
							<S.ScoreboardPlayerName>
								{player.displayName}
							</S.ScoreboardPlayerName>
							<div>Lines: {player.gameLineCount}</div>
							<div>Boxes: {player.gameBoxCount}</div>
							{player === currentPlayer && <span> current</span>}
						</section>
					))}
			</S.ScoreboardGrid>
			{currentPlayer && (
				<NotificationTurn playerName={currentPlayer.displayName} />
			)}
		</>
	);
}
