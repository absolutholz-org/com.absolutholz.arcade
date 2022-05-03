import { createContext, Dispatch, SetStateAction } from 'react';

import { ColorScheme } from '../../enums';

export const SiteColorSchemeContext = createContext<{
	siteColorScheme: ColorScheme;
	setSiteColorScheme: Dispatch<SetStateAction<ColorScheme>>;
}>({
	siteColorScheme: ColorScheme.Light,
	setSiteColorScheme: () => {},
});
