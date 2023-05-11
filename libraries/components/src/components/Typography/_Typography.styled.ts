import styled from '@emotion/styled';

import { typography } from './_Typography';
import { TypographyProps } from './_Typography.types';

export const Typography = styled.div<TypographyProps>`
	${({ level }) => typography(level)};
`;
