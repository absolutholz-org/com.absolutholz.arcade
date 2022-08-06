import { createContext, Dispatch, SetStateAction } from 'react';

export type ColorScheme = 'auto' | 'light' | 'dark';

export const SiteColorSchemeContext = createContext<{
	siteColorScheme: ColorScheme;
	setSiteColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}>({
	siteColorScheme: 'light',
	setSiteColorScheme: () => {},
});
