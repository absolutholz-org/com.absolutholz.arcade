import { ReactNode, useEffect } from 'react';

import { STORAGE_PREFIX_ARCADE } from '@arcade/library-common/src/constants';

import { ColorScheme, SiteColorSchemeContext } from './SiteColorSchemeContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const STORAGE_KEY = `${STORAGE_PREFIX_ARCADE}_colorscheme`;
const HTML_SCHEME_ATTRIBUTE = 'data-color-scheme';

type SiteColorSchemeProviderProps = {
	children: ReactNode;
};

export const SiteColorSchemeProvider = ({
	children,
}: SiteColorSchemeProviderProps) => {
	const [siteColorScheme, setSiteColorScheme] = useLocalStorage<ColorScheme>(
		STORAGE_KEY,
		'system'
	);

	useEffect(() => {
		const elHtml = document.querySelector('html');
		switch (siteColorScheme) {
			case 'light':
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'light');
				// localStorage.setItem(STORAGE_KEY, 'light');
				break;
			case 'dark':
				elHtml!.setAttribute(HTML_SCHEME_ATTRIBUTE, 'dark');
				// localStorage.setItem(STORAGE_KEY, 'dark');
				break;
			default:
				elHtml!.removeAttribute(HTML_SCHEME_ATTRIBUTE);
			// localStorage.removeItem(STORAGE_KEY);
		}
	}, [siteColorScheme]);

	return (
		<SiteColorSchemeContext.Provider
			value={{ siteColorScheme, setSiteColorScheme }}>
			{children}
		</SiteColorSchemeContext.Provider>
	);
};
