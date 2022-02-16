import { PageLayoutContainer } from '../../../../components/PageLayoutContainer';
import { SiteHeader } from '../../../../components/SiteHeader';
import { GameProvider } from '../../context/Game';
import { Game } from '../../components/Game';

export function GamePage(): JSX.Element {
	return (
		<GameProvider>
			<SiteHeader />
			<PageLayoutContainer>
				<main>
					<Game />
				</main>
			</PageLayoutContainer>
		</GameProvider>
	);
}
