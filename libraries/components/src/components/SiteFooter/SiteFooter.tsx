import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { IconSize } from '../Icon';

import MdiReactIconComponentType from 'mdi-react';

import { Icon } from '../Icon';
import { LogoTextInline } from '../logos/LogoTextInline';
import { PageLayoutContainer } from '../PageLayoutContainer';
import { useSiteColorScheme } from '../../context';

import type { ISiteFooter } from './ISiteFooter';
import * as S from './SiteFooter.styled';

import SvgSchemeAuto from 'mdi-react/ThemeLightDarkIcon';
import SvgSchemeLight from 'mdi-react/WeatherSunnyIcon';
import SvgSchemeDark from 'mdi-react/WeatherNightIcon';
import { SectionPadded } from '../SectionPadded';
import { SpacingSize } from '../../enums';

export function SiteFooter({ slotHomeLinkPrefix }: ISiteFooter): JSX.Element {
	const [schemeIcon, setSchemeIcon] =
		useState<typeof MdiReactIconComponentType>(SvgSchemeAuto);
	const [schemeText, setSchemeText] = useState<string>('System');
	const { siteColorScheme } = useSiteColorScheme();

	useEffect(() => {
		if (siteColorScheme === 'light') {
			setSchemeIcon(SvgSchemeLight);
			setSchemeText('Light');
		} else if (siteColorScheme === 'dark') {
			setSchemeIcon(SvgSchemeDark);
			setSchemeText('Dark');
		} else {
			setSchemeIcon(SvgSchemeAuto);
			setSchemeText('System');
		}
	}, [siteColorScheme]);

	return (
		<PageLayoutContainer>
			<SectionPadded $spacing={SpacingSize.x150}>
				<S.SiteFooter>
					<S.SiteFooterSection>
						{slotHomeLinkPrefix && slotHomeLinkPrefix}
						<a href='http://arcade.absolutholz.de'>
							<LogoTextInline />
						</a>
					</S.SiteFooterSection>
					<S.SiteFooterNav as='nav'>
						<Link to='/'>Home</Link>
						<Link to='/accessibility-statement'>
							Accessibility Statement
						</Link>
						<Link to='/privacy-policy'>Privacy Policy</Link>
						<Link to='/terms-of-service'>Terms of Service</Link>
					</S.SiteFooterNav>
					<S.SiteFooterSection>
						<S.ColorScheme>
							Color Mode:
							<S.ColorSchemeToggler>
								<Icon icon={schemeIcon} size={IconSize.x125} />{' '}
								{schemeText}
							</S.ColorSchemeToggler>
						</S.ColorScheme>
					</S.SiteFooterSection>
				</S.SiteFooter>
			</SectionPadded>
		</PageLayoutContainer>
	);
}
