export type ThemeColor = {
	surface: string;
	onSurface: string[];
};

export type ThemeScheme = ThemeColor & Record<string, ThemeColor>;

export type Theme = {
	id: string;
	light: ThemeScheme;
	dark: ThemeScheme;
};
