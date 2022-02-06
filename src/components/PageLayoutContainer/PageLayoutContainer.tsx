import { IPageLayoutContainerProps } from './IPageLayoutContainer';
import * as S from './PageLayoutContainer.styled';

export function PageLayoutContainer ({ children }: IPageLayoutContainerProps): JSX.Element {
    return (
        <S.PageLayoutContainer>{ children }</S.PageLayoutContainer>
    )
}
