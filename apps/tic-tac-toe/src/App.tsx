import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PlayersProvider } from './context/Players';
import { GamePage } from './pages/GamePage';
import { HomePage } from './pages/HomePage';

import * as S from '@arcade/common/Global.styled';

export function App(): JSX.Element {
	return (
		<PlayersProvider>
			<S.GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='game' element={<GamePage />} />
				</Routes>
			</BrowserRouter>
		</PlayersProvider>
	);
}
