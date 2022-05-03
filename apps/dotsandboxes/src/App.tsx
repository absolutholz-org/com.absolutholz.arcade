import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
	GlobalStyle,
	SiteColorSchemeProvider,
} from '@arcade/library-components';

import { GamePage, HomePage } from './pages';
import { GameConfigurationProvider } from './context/GameConfiguration';

export function App(): JSX.Element {
	return (
		<SiteColorSchemeProvider>
			<GameConfigurationProvider>
				<GlobalStyle />
				<BrowserRouter basename='/dotsandboxes'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='game' element={<GamePage />} />
					</Routes>
				</BrowserRouter>
			</GameConfigurationProvider>
		</SiteColorSchemeProvider>
	);
}

export default App;
