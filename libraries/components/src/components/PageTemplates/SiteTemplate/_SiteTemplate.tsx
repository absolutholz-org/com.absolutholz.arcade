import { Helmet, HelmetProvider } from 'react-helmet-async';

import { BaseStyles } from '../../../styles/BaseStyles';
import { SiteTemplateProps } from './_SiteTemplate.types';

export function SiteTemplate({ children, pageTitle }: SiteTemplateProps) {
	return (
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
			</Helmet>
			<BaseStyles />
			{children}
		</HelmetProvider>
	);
}