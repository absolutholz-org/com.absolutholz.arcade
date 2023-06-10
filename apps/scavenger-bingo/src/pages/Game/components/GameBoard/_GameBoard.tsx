import * as S from './_GameBoard.styled';
import { GameBoardProps } from './_GameBoard.annotations';
import { Typography } from '@arcade/library-components/src/components/Typography';

export function GameBoard({ children }: GameBoardProps): JSX.Element {
	return (
		<S.GameBoard>
			<S.GameBoard_Title>
				<svg viewBox='0 0 24 24'>
					<text x='50%' y='50%'>
						B
					</text>
				</svg>
				<svg viewBox='0 0 24 24'>
					<text x='50%' y='50%'>
						I
					</text>
				</svg>
				<svg viewBox='0 0 24 24'>
					<text x='50%' y='50%'>
						N
					</text>
				</svg>
				<svg viewBox='0 0 24 24'>
					<text x='50%' y='50%'>
						G
					</text>
				</svg>
				<svg viewBox='0 0 24 24'>
					<text x='50%' y='50%'>
						O
					</text>
				</svg>
			</S.GameBoard_Title>
			<S.GameBoard_Grid>{children}</S.GameBoard_Grid>
		</S.GameBoard>
	);
}
