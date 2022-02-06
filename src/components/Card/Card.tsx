import { ICardProps } from './ICard';
import * as S from './Card.styled';

export function Card ({ children, tag = 'div', ...props }: ICardProps): JSX.Element {
    return (
        <S.Card as={ tag } { ...props }>{ children }</S.Card>
    );
}
