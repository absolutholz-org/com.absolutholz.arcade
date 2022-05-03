import { ReactNode, useEffect, useState } from 'react';
import { ColorScheme } from '../../enums';

import { SiteColorSchemeContext } from './SiteColorSchemeContext';

const STORAGE_KEY = 'absolutholz.arcade:color-scheme';
const HTML_SCHEME_ATTRIBUTE = 'data-color-scheme';

const elHtml = document.querySelector('html');

type SiteColorSchemeProviderProps = {
	children: ReactNode;
};

export const SiteColorSchemeProvider = ({
	children,
}: SiteColorSchemeProviderProps) => {
	const [siteColorScheme, setSiteColorScheme] = useState<ColorScheme>(
		(localStorage.getItem(STORAGE_KEY) as ColorScheme) ?? ColorScheme.Auto
	);

	useEffect(() => {
		switch (siteColorScheme) {
			case ColorScheme.Light:
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'light');
				localStorage.setItem(STORAGE_KEY, ColorScheme.Light);
				break;
			case ColorScheme.Dark:
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'dark');
				localStorage.setItem(STORAGE_KEY, ColorScheme.Dark);
				break;
			default:
				elHtml!.removeAttribute(HTML_SCHEME_ATTRIBUTE);
				localStorage.removeItem(STORAGE_KEY);
		}
	}, [siteColorScheme]);

	return (
		<SiteColorSchemeContext.Provider
			value={{ siteColorScheme, setSiteColorScheme }}>
			{children}
		</SiteColorSchemeContext.Provider>
	);
};
