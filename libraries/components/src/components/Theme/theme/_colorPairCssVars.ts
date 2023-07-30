import { css, type SerializedStyles } from '@emotion/react';

import type { ColorPair } from '../color/_color.types';

/**
 * Extracts the numeric values from an HSL color string and returns them as a single string.
 * @param color - The HSL color string in the format 'hsl(Xdeg Y% Z%)'.
 * @returns The numeric values as a single string (e.g., 'Xdeg Y% Z%') or null if the input format is incorrect.
 */
function extractNumericValuesFromHSL(color: string): string | null {
	// Define the regex pattern to match the entire content within the parentheses
	const REGEX_HSL_VALUES = /hsl\(([^)]+)\)/;

	const matches = color.match(REGEX_HSL_VALUES);
	if (matches && matches.length === 2) {
		// matches[1] contains the content within the parentheses (numeric values)
		return matches[1];
	} else {
		return null; // Invalid input format
	}
}

/**
 * Generates CSS custom properties for color pairs.
 *
 * This function takes a name and an object containing two arrays of colors: `surface` and `onSurface`.
 * It iterates over the color pairs and generates corresponding CSS custom properties for each color value.
 *
 * @param {string} name - The name to be used as a prefix for the CSS custom properties.
 * @param {ColorPair} obj - An object containing two arrays of colors: `surface` and `onSurface`.
 * @returns {SerializedStyles} The generated CSS custom properties as a SerializedStyles object.
 */
export function generateColorPairCssVars(
	name: string,
	obj: ColorPair
): SerializedStyles {
	return css`
		${obj.surface.map(
			(surface, index: number) => css`
				--color-${name}${index === 0 ? '' : `-${index}`}: ${extractNumericValuesFromHSL(
				surface
			)};
			`
		)}
		${obj.onSurface.map(
			(onSurface, index: number) => css`
				--color-${name}-on${
				index === 0 ? '' : `-${index}`
			}: ${extractNumericValuesFromHSL(onSurface)};
			`
		)}
	`;
}
