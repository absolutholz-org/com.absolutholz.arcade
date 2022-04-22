import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '@arcade/library-components';

import { GameProvider } from './context/Game';
import { PlayersProvider } from './context/Players';
import { GamePage, HomePage } from './pages';
import { GameConfigurationProvider } from './context/GameConfiguration';

export function App(): JSX.Element {
	return (
		<GameConfigurationProvider>
			<GameProvider>
				<PlayersProvider>
					<GlobalStyle />
					<BrowserRouter basename='/dotsandboxes'>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='game' element={<GamePage />} />
						</Routes>
					</BrowserRouter>
				</PlayersProvider>
			</GameProvider>
		</GameConfigurationProvider>
	);
}

export default App;
