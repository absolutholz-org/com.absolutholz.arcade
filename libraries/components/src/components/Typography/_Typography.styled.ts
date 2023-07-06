import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { typography } from './_Typography';
import type { TypographyProps } from './_Typography.annotations';

export const Typography = styled.div<TypographyProps>`
	${({ size = 'm' }) => typography(size)};
	${({ weight = 'regular' }) => weight !== 'regular' && css`
		font-weight: ${weight === 'light' ? 100 : 700};
	`};
`;
