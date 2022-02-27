import { TicTacToePiece } from '../../enums/TicTacToePiece';
import { Icon } from '@arcade/components';
import * as S from './Cell.styled';
import { ICellProps } from './ICell';

// import { ReactComponent as SvgO } from '@mdi/svg/svg/circle-outline.svg'; // checkbox-blank-circle-outline
// import { ReactComponent as SvgX } from '@mdi/svg/svg/window-close.svg'; // close

function SvgO(): JSX.Element {
	return <>O</>;
}

function SvgX(): JSX.Element {
	return <>X</>;
}

export function Cell({ row, column, mark, onClick }: ICellProps): JSX.Element {
	const handleButtonClick = (): void => {
		onClick(row, column);
	};
	console.log('RENDER: Cell');

	return (
		<S.Cell id={`${row}x${column}`}>
			<S.Button disabled={mark !== undefined} onClick={handleButtonClick}>
				{mark && mark === TicTacToePiece.X && <Icon>{SvgX}</Icon>}
				{mark && mark === TicTacToePiece.O && <Icon>{SvgO}</Icon>}
			</S.Button>
		</S.Cell>
	);
}
