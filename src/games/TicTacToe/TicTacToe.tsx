import { Route, Routes } from 'react-router-dom';

import { PlayersProvider } from './context/Players';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

export function TicTacToe(): JSX.Element {
	return (
		<PlayersProvider>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='game' element={<GamePage />} />
			</Routes>
		</PlayersProvider>
	);
}
