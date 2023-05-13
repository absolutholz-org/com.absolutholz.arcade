import { ReactNode, useEffect, useState } from 'react';

import { ColorScheme, SiteColorSchemeContext } from './SiteColorSchemeContext';

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
		(localStorage.getItem(STORAGE_KEY) as ColorScheme) ?? 'system'
	);

	useEffect(() => {
		switch (siteColorScheme) {
			case 'light':
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'light');
				localStorage.setItem(STORAGE_KEY, 'light');
				break;
			case 'dark':
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'dark');
				localStorage.setItem(STORAGE_KEY, 'dark');
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
