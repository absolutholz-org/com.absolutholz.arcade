import { TicTacToePiece } from '../../enums/TicTacToePiece';
import * as S from './Cell.styled';
import { ICellProps } from './ICell';

import { IconSize } from '@arcade/library-components';
import { GamePieceIcon } from '../GamePieceIcon';

export function Cell({ row, column, mark, onClick }: ICellProps): JSX.Element {
	const handleButtonClick = (): void => {
		onClick(row, column);
	};

	return (
		<S.Cell id={`${row}x${column}`}>
			<S.Button disabled={mark !== undefined} onClick={handleButtonClick}>
				{mark && mark === TicTacToePiece.X && (
					<GamePieceIcon
						iconSize={IconSize.Full}
						piece={TicTacToePiece.X}
					/>
				)}
				{mark && mark === TicTacToePiece.O && (
					<GamePieceIcon
						iconSize={IconSize.Full}
						piece={TicTacToePiece.O}
					/>
				)}
			</S.Button>
		</S.Cell>
	);
}
