import { IGameboardProps } from './IGameboard';
import * as S from './Gameboard.styled';
import { GameboardSquare } from '../GameboardSquare';
import { useGameState } from '../../context/GameState';
import { useGameConfiguration } from '../../context/GameConfiguration';

export function Gameboard({ ...props }: IGameboardProps): JSX.Element {
	const { squares } = useGameState();
	const {
		gameSize: { columnCount, rowCount },
	} = useGameConfiguration();

	return (
		<>
			<S.Gameboard
				$columnCount={columnCount}
				$rowCount={rowCount}
				{...props}>
				{squares &&
					squares.map((square) => {
						const { rowIndex, columnIndex } = square;

						return (
							<GameboardSquare
								square={square}
								isLastRowInColumn={rowIndex + 1 === rowCount}
								isLastColumnInRow={
									columnIndex + 1 === columnCount
								}
								key={`${rowIndex}x${columnIndex}`}
							/>
						);
					})}
			</S.Gameboard>
		</>
	);
}
