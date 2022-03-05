import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GameConfiguration } from './context/GameConfiguration';
import { PlayersProvider } from './context/Players';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

import { GlobalStyle } from '@arcade/components';

export function App(): JSX.Element {
	return (
		<GameConfiguration>
			<PlayersProvider>
				<GlobalStyle />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='game' element={<GamePage />} />
					</Routes>
				</BrowserRouter>
			</PlayersProvider>
		</GameConfiguration>
	);
}
