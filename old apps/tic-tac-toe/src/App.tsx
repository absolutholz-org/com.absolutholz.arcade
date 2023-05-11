import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '@arcade/library-authentication';
import { GlobalStyle, SiteColorSchemeProvider } from '@arcade/library-components';

import { GameConfigurationProvider } from './context/GameConfiguration';
import { Home } from './pages/Home';
import { Lobby } from './pages/Lobby';
import { Game } from './pages/Game';

function App() {
	return (
		<AuthProvider>
			<SiteColorSchemeProvider>
				<GlobalStyle />

				<GameConfigurationProvider>
					<BrowserRouter basename='/tictactoe'>
						<Suspense fallback={<>Loading</>}>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/lobby' element={<Lobby />} />
								<Route path='/game' element={<Game />} />
							</Routes>
						</Suspense>
					</BrowserRouter>
				</GameConfigurationProvider>
			</SiteColorSchemeProvider>
		</AuthProvider>
	);
}

export default App;
