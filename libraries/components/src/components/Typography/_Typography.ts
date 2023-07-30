import { SerializedStyles, css } from '@emotion/react';

import { TypographySize } from './_Typography.types';

export function typography(size: TypographySize = 'm'): SerializedStyles {
	let level = 0;
	switch (size) {
		case 'xs':
			level = -2;
			break;
		case 's':
			level = -1;
			break;
		case 'm':
			level = 0;
			break;
		case 'l':
			level = 1;
			break;
		case 'xl':
			level = 2;
			break;
		case 'xxl':
			level = 3;
			break;
		case 'xxxl':
			level = 4;
			break;
		case 'xxxxl':
			level = 5;
			break;
	}

	return css`
		font: var(--typo-size-${size}) / ${1.4 - level / 10}
			var(--typo-family, var(--typo-family-native));
	`;
}
