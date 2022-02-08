import { IPageLayoutContainerProps } from './IPageLayoutContainer';
import * as S from './PageLayoutContainer.styled';

export function PageLayoutContainer ({ children, ...props }: IPageLayoutContainerProps): JSX.Element {
    return (
        <S.PageLayoutContainer { ...props }>{ children }</S.PageLayoutContainer>
    )
}
