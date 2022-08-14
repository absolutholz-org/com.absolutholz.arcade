import { createContext, Dispatch, SetStateAction } from 'react';

export type ColorScheme = 'system' | 'light' | 'dark';

export const SiteColorSchemeContext = createContext<{
	siteColorScheme: ColorScheme;
	setSiteColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}>({
	siteColorScheme: 'system',
	setSiteColorScheme: () => {},
});
