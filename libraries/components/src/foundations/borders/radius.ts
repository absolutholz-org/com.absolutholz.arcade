import { css } from '@emotion/react';

type RadiusShape = 'equal' | 'elliptical';

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
