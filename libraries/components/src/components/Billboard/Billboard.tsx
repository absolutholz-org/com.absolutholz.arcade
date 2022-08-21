import { ContentContainer } from '../layout/ContentContainer';
import { Theme } from '../Theme';
import { VerticallyPaddedContainer } from '../layout/VerticallyPaddedContainer';

import { BillboardProps } from './Billboard.annotations';
import * as S from './Billboard.styled';

export function Billboard({ children, ...props }: BillboardProps): JSX.Element {
	return (
		<Theme $theme='image'>
			<S.Billboard {...props}>
				<VerticallyPaddedContainer spacing={300}>
					<ContentContainer>{children}</ContentContainer>
				</VerticallyPaddedContainer>
			</S.Billboard>
		</Theme>
	);
}
