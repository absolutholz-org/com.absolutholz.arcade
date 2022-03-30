import { useMediaQuery } from "@arcade/library-common";

import { GameProvider } from "../../context/Game";
import { Gameboard } from "../../components/Gameboard";
import { Scoreboard } from "../../components/Scoreboard";

import * as S from "./GamePage.styled";

export function GamePage(): JSX.Element {
	const isLandscape = useMediaQuery(S.MEDIA_QUERY);

	return (
		<GameProvider>
			{isLandscape ? (
				<S.GameWrapper>
					<S.GameboardColumn>
						<S.GameboardWrapper>
							<Gameboard />
						</S.GameboardWrapper>
					</S.GameboardColumn>

					<S.ScoreboardColumn>
						<Scoreboard />
					</S.ScoreboardColumn>
				</S.GameWrapper>
			) : (
				<>
					{/* <SiteHeader /> */}

					<S.GameWrapper>
						<S.GameboardColumn>
							<S.GameboardWrapper>
								<Gameboard />
							</S.GameboardWrapper>
						</S.GameboardColumn>

						<S.ScoreboardColumn>
							<Scoreboard />
						</S.ScoreboardColumn>
					</S.GameWrapper>
				</>
			)}
			<S.TurnDisplay />
		</GameProvider>
	);
}
