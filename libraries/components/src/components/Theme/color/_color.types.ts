export type ColorLevel = number;

export type ColorOption =
	| 'surface'
	| 'surface-on'
	| 'accent'
	| 'accent-on'
	| 'error'
	| 'error-on'
	| 'secondary'
	| 'secondary-on';

/**
 * Represents a pair of color arrays: `surface` and `onSurface`.
 * Each array contains color values in string format.
 */
export type ColorPair = {
	surface: string[];
	onSurface: string[];
};

export type ColorScheme = ColorPair &
	Record<'accent', ColorPair[]> &
	Partial<Record<'error', ColorPair[]>>;

export type ColorSet = {
	id: string;
	light: ColorScheme;
	dark: ColorScheme;
};
