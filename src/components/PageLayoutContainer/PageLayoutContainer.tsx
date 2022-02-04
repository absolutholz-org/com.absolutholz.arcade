import { IPageLayoutContainerProps } from './IPageLayoutContainer';
import * as S from './PageLayoutContainer.styled';

export function PageLayoutContainer ({ children }: IPageLayoutContainerProps): JSX.Element {
    return (
        <>
            <S.GlobalStyle />
            <S.PageLayoutContainer>{ children }</S.PageLayoutContainer>
        </>
    )
}
