import { type SerializedStyles, css } from '@emotion/react';

import type { ColorScheme } from '../color/_color.types';
import { generateColorPairCssVars } from './_colorPairCssVars';

export function colorSchemesCssVars(
	colorScheme: ColorScheme
): SerializedStyles {
	const { surface, onSurface, ...colorSchemeRest } = colorScheme;

	const basePairs = generateColorPairCssVars('surface', {
		surface,
		onSurface,
	});

	const schemePairs = Object.entries(colorSchemeRest).map(
		([name, colorPairs]) => {
			return colorPairs.map((colorPair) => {
				return generateColorPairCssVars(name, colorPair);
			});
		}
	);

	return css`
		${basePairs}
		${schemePairs}
	`;
}
