import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Lobby } from './pages/Lobby';
import { Games } from './pages/Games';
import { FourOhFourPage } from '@arcade/library-components/src/components/FourOhFourPage';

function App() {
	return (
		<BrowserRouter basename='/scavengerbingo'>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='/lobby' element={<Lobby />} />
					<Route path='/games' element={<Games />} />
					<Route path='/game/:gameId' element={<Game />} />
					<Route path='*' element={<FourOhFourPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
