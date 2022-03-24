import { Route, Routes } from 'react-router-dom';

import { Checkers } from './Checkers';
import { Connect4 } from './Connect4';
import { DotsAndBoxes } from './DotsAndBoxes';
import { Memory } from './Memory';
import { Minesweeper } from './Minesweeper';
import { Sudoku } from './Sudoku';
import { TicTacToe } from './TicTacToe';

export function Games(): JSX.Element {
	return (
		<Routes>
			<Route path='checkers/*' element={<Checkers />} />
			<Route path='connect4/*' element={<Connect4 />} />
			<Route path='dotsandboxes/*' element={<DotsAndBoxes />} />
			<Route path='memory/*' element={<Memory />} />
			<Route path='minesweeper/*' element={<Minesweeper />} />
			<Route path='sudoku/*' element={<Sudoku />} />
			<Route path='tictactoe/*' element={<TicTacToe />} />
		</Routes>
	);
}
