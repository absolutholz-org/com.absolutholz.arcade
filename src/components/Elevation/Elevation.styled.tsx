import { css } from 'styled-components';

// https://material.io/archive/guidelines/material-design/elevation-shadows.html#elevation-shadows-elevation-android
// https://material.io/design/environment/elevation.html#default-elevations
// https://material-components.github.io/material-components-web-catalog/#/component/elevation

type ElevationLevel = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

/**
 * Returns the appropriate shadow value used in light and dark modes to indicate elevation
 * @param {Level} level - Elevation value
 * @returns {number} - opacity as decimal
 */
function getElevationShadow(level: ElevationLevel): string {
	switch (level) {
		case 1:
			return '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)';
		case 2:
			return '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)';
		case 3:
			return '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)';
		case 4:
			return '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)';
		case 6:
			return '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)';
		case 8:
			return '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)';
		case 12:
			return '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)';
		case 16:
			return '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)';
		case 24:
			return '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)';
		default:
			return '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)';
	}
}

/**
 * Returns the appropriate opacity value for the white overlay used in dark mode to indicate elevation
 * @see {@link https://material.io/design/color/dark-theme.html#properties} for source of return values
 * @param {Level} level - Elevation value
 * @returns {number} - opacity as decimal
 */
function getElevationDarkModeOverlayOpacity(level: ElevationLevel): number {
	switch (level) {
		case 1:
			return 0.05;
		case 2:
			return 0.07;
		case 3:
			return 0.08;
		case 4:
			return 0.09;
		case 6:
			return 0.11;
		case 8:
			return 0.12;
		case 12:
			return 0.14;
		case 16:
			return 0.15;
		case 24:
			return 0.16;
		default:
			return 0;
	}
}

export function Elevation(level: ElevationLevel) {
	return css`
		/* This is the overlay used to lighten the element as it is "elevated" */
		background-image: linear-gradient(
			red,
			rgba(255, 255, 255, ${getElevationDarkModeOverlayOpacity(level)}) 0%
		);

		box-shadow: ${getElevationShadow(level)};
		transition: box-shadow 300ms ease-in-out, background 300ms ease-in-out;
	`;
}
