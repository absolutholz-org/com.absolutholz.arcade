import { NotificationTurn } from '@arcade/library-components';

import { useGameState } from '../../context/GameState';
import { IScoreboardProps } from './IScoreboard';
import * as S from './Scoreboard.styled';

export function Scoreboard({ ...props }: IScoreboardProps): JSX.Element {
	const { players, currentPlayer } = useGameState();

	return (
		<>
			<S.Scoreboard {...props}>
				{players &&
					players.map((player) => (
						<div key={`scoreboard-player_${player.uuid}`}>
							{player.displayName}
							{player === currentPlayer && <span> current</span>}
						</div>
					))}
			</S.Scoreboard>
			{currentPlayer && (
				<NotificationTurn playerName={currentPlayer.displayName} />
			)}
		</>
	);
}
