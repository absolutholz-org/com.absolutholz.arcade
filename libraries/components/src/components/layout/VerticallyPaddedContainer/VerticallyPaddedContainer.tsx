import { VerticallyPaddedContainerProps } from './VerticallyPaddedContainer.annotations';
import * as S from './VerticallyPaddedContainer.styled';

export function VerticallyPaddedContainer({ children, slotHeader, ...props }: VerticallyPaddedContainerProps): JSX.Element {
	return (
		<S.VerticallyPaddedContainer {...props}>
			{slotHeader && <S.VerticallyPaddedContainerHeader>{slotHeader}</S.VerticallyPaddedContainerHeader>}
			{children}
		</S.VerticallyPaddedContainer>
	);
}
