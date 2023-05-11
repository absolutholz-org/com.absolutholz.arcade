import { css } from '@emotion/react';

import { TypographyLevel } from './_Typography.types';

export function typography(level: TypographyLevel = 0) {
	return css`
		font: var(--typo-size-${level}) / ${1.5 - level / 10}
			var(--typo-family, var(--typo-family-native));
	`;
}
