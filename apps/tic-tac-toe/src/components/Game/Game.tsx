import { useMediaQuery } from '@arcade/common/hooks/useMediaQuery';

import { useGameState } from '../../context/Game';
import * as S from './Game.styled';
import { Scoreboard } from '../Scoreboard';
import { SectionPadded } from '@arcade/components';

export function Game(): JSX.Element {
	const {
		players: { player1, player2 },
	} = useGameState();

	const isLandscape = useMediaQuery('(orientation: landscape)');

	return (
		<>
			{/* {isLandscape ? (
				<S.LayoutLandscape>
					<Scoreboard
						displayName={player1.displayName}
						gamesWon={0}
						piece={player1.piece}
					/>
					<S.Gameboard />
					<Scoreboard
						displayName={player2.displayName}
						gamesWon={0}
						piece={player2.piece}
					/>
				</S.LayoutLandscape>
			) : ( */}
			<S.LayoutPortrait>
				<div>
					<S.Gameboard />
				</div>
				<div>
					<S.LayoutPortraitScoreboards>
						<Scoreboard
							displayName={player1.displayName}
							gamesWon={0}
							piece={player1.piece}
						/>
						<Scoreboard
							displayName={player2.displayName}
							gamesWon={0}
							piece={player2.piece}
						/>
					</S.LayoutPortraitScoreboards>
				</div>
			</S.LayoutPortrait>
			{/* )} */}
		</>
	);
}
