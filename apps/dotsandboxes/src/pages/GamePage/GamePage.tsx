import { PageLayoutContainer } from '@arcade/library-components';

import { Gameboard, Scoreboard } from '../../components';

import { GameStateProvider } from '../../context/GameState';

export function GamePage(): JSX.Element {
	return (
		<GameStateProvider>
			<PageLayoutContainer>
				<div>
					<Gameboard />
				</div>
				<div>
					<Scoreboard />
				</div>
			</PageLayoutContainer>
		</GameStateProvider>
	);
}
