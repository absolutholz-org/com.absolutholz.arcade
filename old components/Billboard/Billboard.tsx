import { ContentContainer } from '../layout/ContentContainer';
import { Theme } from '../Theme';

import { BillboardProps } from './Billboard.annotations';
import * as S from './Billboard.styled';

export function Billboard({ children, slotBackground, ...props }: BillboardProps): JSX.Element {
	return (
		<Theme $theme='image'>
			<S.Billboard $withBackground={!slotBackground} {...props}>
				{slotBackground && <S.BillboardBackground>{slotBackground}</S.BillboardBackground>}
				<S.BillboardContent spacing={300}>
					<ContentContainer>{children}</ContentContainer>
				</S.BillboardContent>
			</S.Billboard>
		</Theme>
	);
}
