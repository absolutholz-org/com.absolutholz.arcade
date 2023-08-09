import { Helmet, HelmetProvider } from 'react-helmet-async';

import { ArcadeFooter } from '../ArcadeFooter';

import { IArcadePage } from './_ArcadePage.types';
import { BaseStyles } from '../../styles/BaseStyles';
import { SiteColorSchemeProvider } from '../../contexts/SiteColorScheme';

export function ArcadePage({ children, pageTitle }: IArcadePage): JSX.Element {
	return (
		<SiteColorSchemeProvider>
			<HelmetProvider>
				<Helmet>
					<meta charSet='UTF-8' />
					<title>
						{pageTitle ? `${pageTitle} | ` : ''}absolutholz Arcade
					</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<meta name='robots' content='noindex,nofollow' />
					<meta name='color-scheme' content='dark light' />
					<link rel='icon' href='/favicon.svg' type='image/svg+xml' />
				</Helmet>
				{/* BaseStyles need to be outside of Helmet, or else there is an error about Helmet being included inside of Helmet. */}
				<BaseStyles />
				{children}
				<ArcadeFooter />
			</HelmetProvider>
		</SiteColorSchemeProvider>
	);
}
