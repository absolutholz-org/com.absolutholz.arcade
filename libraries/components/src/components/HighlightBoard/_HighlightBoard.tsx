import { IHighlightBoard } from './_HighlightBoard.types';
import * as S from './_HighlightBoard.styled';

export function HighlightBoard({ direction }: IHighlightBoard): JSX.Element {
	function getDelay(position: number): number | undefined {
		if (direction === 'columns') {
			return Math.floor(position % 5);
		} else if (direction === 'corners') {
			return position === 0 ||
				position === 4 ||
				position === 20 ||
				position === 24
				? 0
				: undefined;
		} else if (direction === 'diagonals') {
			if (Math.floor(position % 5) === Math.floor(position / 5)) {
				return 0;
			} else if (
				Math.floor(position % 5) + Math.floor(position / 5) ===
				4
			) {
				return 2;
			} else {
				return undefined;
			}
		}
		return Math.floor(position / 5);
	}

	return (
		<S.HighlightBoard>
			<S.HighlightBoard_Head />
			<S.HighlightBoard_Grid>
				{new Array(25).fill(0).map((_, index) => (
					<S.HighlightBoard_Cell
						key={`board-cell_${index}`}
						delay={getDelay(index)}
					/>
				))}
			</S.HighlightBoard_Grid>
		</S.HighlightBoard>
	);
}
