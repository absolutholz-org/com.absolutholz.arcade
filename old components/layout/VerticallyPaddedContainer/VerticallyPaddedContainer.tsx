import type { VerticallyPaddedContainerProps } from './VerticallyPaddedContainer.annotations';
import * as S from './VerticallyPaddedContainer.styled';

export function VerticallyPaddedContainer({
	children,
	slotHeader,
	slotHeaderSpacing,
	spacing,
	omit,
	...props
}: VerticallyPaddedContainerProps): JSX.Element {
	return (
		<S.VerticallyPaddedContainer $omit={omit} $spacing={spacing} {...props}>
			{slotHeader && (
				<S.VerticallyPaddedContainerHeader $spacing={slotHeaderSpacing}>{slotHeader}</S.VerticallyPaddedContainerHeader>
			)}
			{children}
		</S.VerticallyPaddedContainer>
	);
}
