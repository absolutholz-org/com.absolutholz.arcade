// https://www.kindacode.com/article/react-router-dom-scroll-to-top-on-route-change/

import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = ({ children }: { children: ReactNode }) => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return <>{children}</>;
};
