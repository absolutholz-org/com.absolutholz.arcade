import { useContext } from 'react';

import { SiteColorSchemeContext } from './SiteColorSchemeContext';

export const useSiteColorScheme = () => {
	const context = useContext(SiteColorSchemeContext);

	if (!context && typeof window !== 'undefined') {
		throw new Error(
			`usePlayer must be used within a SiteColorSchemeContext `
		);
	}

	return context;
};
