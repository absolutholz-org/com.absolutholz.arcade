import { useGameState } from '../../context/Game';
import * as S from './Game.styled';
import { Scoreboard } from '../Scoreboard';
import { useMediaQuery } from '@arcade/common/hooks/useMediaQuery';

export function Game(): JSX.Element {
	const {
		players: { player1, player2 },
	} = useGameState();

	const isLandscape = useMediaQuery('(orientation: landscape)');

	return (
		<>
			{isLandscape ? (
				<S.LayoutLandscape>
					<Scoreboard
						displayName={player1.displayName}
						gamesWon={0}
					/>
					<S.Gameboard />
					<Scoreboard
						displayName={player2.displayName}
						gamesWon={0}
					/>
				</S.LayoutLandscape>
			) : (
				<S.LayoutPortrait>
					<S.Gameboard />
					<S.LayoutPortraitScoreboards>
						<Scoreboard
							displayName={player1.displayName}
							gamesWon={0}
						/>
						<Scoreboard
							displayName={player2.displayName}
							gamesWon={0}
						/>
					</S.LayoutPortraitScoreboards>
				</S.LayoutPortrait>
			)}
		</>
	);
}
