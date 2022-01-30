import { TicTacToePiece } from '../../Enums/TicTacToePiece';
import * as S from './Cell.styled';
import { ICellProps } from './ICell';

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
                { mark && mark === TicTacToePiece.x &&
                    <svg viewBox="0 0 24 24">
                        <title>X</title>
                        <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                }
                { mark && mark === TicTacToePiece.o &&
                    <svg viewBox="0 0 24 24">
                        <title>O</title>
                        <path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                }
            </S.Button>
        </S.Cell>
    );
}
