import { ICardProps } from './ICard';
import * as S from './Card.styled';

export function Card ({ children, tag }: ICardProps): JSX.Element {
    return (
        <S.Card as={ tag }>{ children }</S.Card>
    );
}
