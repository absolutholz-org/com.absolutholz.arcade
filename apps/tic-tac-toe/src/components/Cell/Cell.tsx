import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { Icon } from '@arcade/components';
import * as S from './Cell.styled';
import { ICellProps } from './ICell';

import { IconSize } from '@arcade/components';
import { IconX } from '../IconX';
import { IconO } from '../IconO';

export function Cell({ row, column, mark, onClick }: ICellProps): JSX.Element {
	const handleButtonClick = (): void => {
		onClick(row, column);
	};
	console.log('RENDER: Cell');

	return (
		<S.Cell id={`${row}x${column}`}>
			<S.Button disabled={mark !== undefined} onClick={handleButtonClick}>
				{mark && mark === TicTacToePiece.X && (
					<Icon size={IconSize.Full} icon={IconX} />
				)}
				{mark && mark === TicTacToePiece.O && (
					<Icon size={IconSize.Full} icon={IconO} />
				)}
			</S.Button>
		</S.Cell>
	);
}
