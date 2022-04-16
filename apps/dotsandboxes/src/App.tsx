import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '@arcade/library-components';

import { GameProvider } from './context/GameContext';
import { PlayersProvider } from './context/Players';
import { GamePage, HomePage } from './pages';

export function App(): JSX.Element {
	return (
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
	);
}

export default App;
