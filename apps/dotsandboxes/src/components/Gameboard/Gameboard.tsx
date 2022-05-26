import { IGameboardProps } from './IGameboard';
import * as S from './Gameboard.styled';
import { GameboardBox } from '../GameboardBox';
import { useGameState } from '../../context/GameState';
import { useGameConfiguration } from '../../context/GameConfiguration';

export function Gameboard({ ...props }: IGameboardProps): JSX.Element {
	const { boxes, players } = useGameState();
	const {
		gameSize: { columnCount, rowCount },
	} = useGameConfiguration();

	return (
		<S.Gameboard $columnCount={columnCount} $rowCount={rowCount} {...props}>
			{boxes &&
				boxes.map((box) => {
					const { rowIndex, columnIndex } = box;

					return (
						<GameboardBox
							box={box}
							isLastRowInColumn={rowIndex + 1 === rowCount}
							isLastColumnInRow={columnIndex + 1 === columnCount}
							key={`${rowIndex}x${columnIndex}`}
						/>
					);
				})}
		</S.Gameboard>
	);
}
