import { Route, Routes } from 'react-router-dom';

import { PlayersProvider } from './context/Players';
import { Game } from './Pages/Game';
import { Home } from './Pages/Home';

export function TicTacToe (): JSX.Element {
    return (
        <PlayersProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='game' element={<Game />} />
            </Routes>
        </PlayersProvider>
    )
}

export default TicTacToe;
