export type ThemeColor = {
	surface: string;
	onSurface: string[];
};

export type ThemeScheme = ThemeColor &
	Record<Partial<'accent' | 'error'>, ThemeColor[]>;

export type Theme = {
	id: string;
	light: ThemeScheme;
	dark: ThemeScheme;
	// light: {
	// 	surface: string;
	// 	onSurface: string[];
	// 	accent?: ThemeColor[];
	// 	error?: ThemeColor[];
	// 	success?: ThemeColor[];
	// };
	// dark: {
	// 	surface: string;
	// 	onSurface: string[];
	// 	accent?: ThemeColor[];
	// 	error?: ThemeColor[];
	// 	success?: ThemeColor[];
	// };
};
