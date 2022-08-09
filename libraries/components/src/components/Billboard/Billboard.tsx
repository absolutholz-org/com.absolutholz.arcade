import { PageLayoutContainer } from '../PageLayoutContainer';
import { BillboardProps } from './Billboard.annotations';
import * as S from './Billboard.styled';

export function Billboard({
	children,
	slotHeadline,
	imgUri,
	...restProps
}: BillboardProps): JSX.Element {
	return (
		<S.Billboard {...restProps}>
			<S.BillboardBackground src={imgUri} />
			<PageLayoutContainer>
				<S.BillboardHeadline as='h1'>
					{slotHeadline}
				</S.BillboardHeadline>
				{children}
			</PageLayoutContainer>
		</S.Billboard>
	);
}
