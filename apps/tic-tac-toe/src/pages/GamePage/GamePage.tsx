import { PageLayoutContainer, SiteHeader } from '@arcade/components';
import { useMediaQuery } from '@arcade/common/hooks/useMediaQuery';

import { GameProvider } from '../../context/Game';
import * as S from './GamePage.styled';
import { Scoreboard } from '../../components/Scoreboard';
import { TurnDisplay } from '../../components/TurnDisplay';

export function GamePage(): JSX.Element {
	const isLandscape = useMediaQuery(S.MEDIA_QUERY);

	return (
		<GameProvider>
			{isLandscape ? (
				<S.GameWrapper>
					<S.GameboardColumn>
						<S.GameboardWrapper>
							<S.Gameboard />
						</S.GameboardWrapper>
					</S.GameboardColumn>

					<S.ScoreboardColumn>
						<S.ScoreboardHeadWrapper>
							{/* <SiteHeader /> */}
							{/* <S.TurnDisplay /> */}
						</S.ScoreboardHeadWrapper>
						<S.ScoreboardBodyWrapper>
							<S.Scoreboard />
						</S.ScoreboardBodyWrapper>
						<S.ScoreboardFootWrapper>
							{/* Scoreboard Foot */}
						</S.ScoreboardFootWrapper>
					</S.ScoreboardColumn>
				</S.GameWrapper>
			) : (
				<>
					{/* <SiteHeader /> */}

					<S.GameWrapper>
						<S.GameboardColumn>
							<S.GameboardWrapper>
								<S.Gameboard />
							</S.GameboardWrapper>
						</S.GameboardColumn>

						<S.ScoreboardColumn>
							<S.ScoreboardHeadWrapper></S.ScoreboardHeadWrapper>
							<S.ScoreboardBodyWrapper>
								<S.Scoreboard />
							</S.ScoreboardBodyWrapper>
							<S.ScoreboardFootWrapper>
								{/* Scoreboard Foot */}
							</S.ScoreboardFootWrapper>
						</S.ScoreboardColumn>
					</S.GameWrapper>
				</>
			)}
			<S.TurnDisplay />
		</GameProvider>
	);
}
