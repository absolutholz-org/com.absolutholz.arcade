import { css } from '@emotion/react';

import type { RadiusShape } from './radius.types';

export function radiusCss(style: RadiusShape) {
	return css`
		border-radius: ${radius(style)};
	`;
}

export function radius(style: RadiusShape) {
	switch (style) {
		case 'elliptical':
			return '10px / 50%';
		default:
			return '3px';
	}
}
