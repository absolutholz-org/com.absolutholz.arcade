import { Route, Routes } from 'react-router-dom';

import { PlayersProvider } from './context/Players';
import { Game } from './pages/Game';
import { Home } from './pages/Home';

export function TicTacToe(): JSX.Element {
	return (
		<PlayersProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='game' element={<Game />} />
			</Routes>
		</PlayersProvider>
	);
}
