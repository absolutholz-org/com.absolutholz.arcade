import styled from '@emotion/styled';

import { typography } from './_Typography';
import type { TypographyProps } from './_Typography.annotations';

export const Typography = styled.div<TypographyProps>`
	${({ size = 'm' }) => typography(size)};
`;
