import { PageLayoutContainer } from '../../../../components/PageLayoutContainer';
import { SiteHeader } from '../../../../components/SiteHeader';
import { Scoreboard } from '../../components/Scoreboard';
import { GameProvider } from '../../context/Game';
import * as S from './Game.styled';

export function Game(): JSX.Element {
	return (
		<GameProvider>
			<SiteHeader />
			<PageLayoutContainer>
				<main>
					<S.Gameboard />
					<Scoreboard />
				</main>
			</PageLayoutContainer>
		</GameProvider>
	);
}
