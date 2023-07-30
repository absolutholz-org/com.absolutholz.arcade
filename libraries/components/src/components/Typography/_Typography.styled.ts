import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { typography } from './_Typography';
import type { TypographyProps } from './_Typography.annotations';
import { TypographyWeight } from './_Typography.types';

function fontWeight(key: TypographyWeight): number {
	switch (key) {
		case 'light':
			return 100;
		case 'medium':
			return 500;
		case 'heavy':
			return 700;
	}

	return 400;
}

export const Typography = styled.div<TypographyProps>`
	${({ size = 'm' }) => typography(size)};
	${({ weight = 'regular' }) =>
		weight !== 'regular' &&
		css`
			font-weight: ${fontWeight(weight)};
		`};
`;
