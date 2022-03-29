import { Link } from "react-router-dom";

// import { useMediaQuery } from '@arcade/common/hooks/useMediaQuery';

// import { GameProvider } from '../../context/Game';
// import { Gameboard } from '../../components/Gameboard';
// import { Scoreboard } from '../../components/Scoreboard';

// import * as S from './GamePage.styled';

export function GamePage(): JSX.Element {
	// const isLandscape = useMediaQuery(S.MEDIA_QUERY);

	return (
		<>
			<h1>
				Tic Tac Toe <u>Game</u>
			</h1>
			<Link to="/">Home</Link>
		</>
		// <GameProvider>
		// 	{isLandscape ? (
		// 		<S.GameWrapper>
		// 			<S.GameboardColumn>
		// 				<S.GameboardWrapper>
		// 					<Gameboard />
		// 				</S.GameboardWrapper>
		// 			</S.GameboardColumn>

		// 			<S.ScoreboardColumn>
		// 				<Scoreboard />
		// 			</S.ScoreboardColumn>
		// 		</S.GameWrapper>
		// 	) : (
		// 		<>
		// 			{/* <SiteHeader /> */}

		// 			<S.GameWrapper>
		// 				<S.GameboardColumn>
		// 					<S.GameboardWrapper>
		// 						<Gameboard />
		// 					</S.GameboardWrapper>
		// 				</S.GameboardColumn>

		// 				<S.ScoreboardColumn>
		// 					<Scoreboard />
		// 				</S.ScoreboardColumn>
		// 			</S.GameWrapper>
		// 		</>
		// 	)}
		// 	<S.TurnDisplay />
		// </GameProvider>
	);
}
