import { TicTacToePiece } from '../../enums/TicTacToePiece';
import * as S from './Cell.styled';
import { ICellProps } from './ICell';

import { ReactComponent as SvgO } from '@mdi/svg/svg/circle-outline.svg'; // checkbox-blank-circle-outline
import { ReactComponent as SvgX } from '@mdi/svg/svg/close.svg';

export function Cell ({ row, column, mark, onClick}: ICellProps): JSX.Element {
    const handleButtonClick = (): void  => {
        onClick(row, column);
    }
    console.log('RENDER: Cell')

    return (
        <S.Cell 
            id={ `${ row }x${ column }` }
        >
            <S.Button disabled={ mark !== undefined } onClick={ handleButtonClick }>
                { mark && mark === TicTacToePiece.X &&
                    <SvgO />
                }
                { mark && mark === TicTacToePiece.O &&
                    <SvgX />
                }
            </S.Button>
        </S.Cell>
    );
}
