import { useEffect, useState } from 'react';

import { ColorScheme } from '../../enums';
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

export function SiteFooter({ slotHomeLinkPrefix }: ISiteFooter): JSX.Element {
	const [schemeIcon, setSchemeIcon] =
		useState<typeof MdiReactIconComponentType>(SvgSchemeAuto);
	const [schemeText, setSchemeText] = useState<string>('System');
	const { siteColorScheme } = useSiteColorScheme();

	useEffect(() => {
		if (siteColorScheme === ColorScheme.Light) {
			setSchemeIcon(SvgSchemeLight);
			setSchemeText('Light');
		} else if (siteColorScheme === ColorScheme.Dark) {
			setSchemeIcon(SvgSchemeDark);
			setSchemeText('Dark');
		} else {
			setSchemeIcon(SvgSchemeAuto);
			setSchemeText('System');
		}
	}, [siteColorScheme]);

	return (
		<PageLayoutContainer>
			<S.SiteFooter>
				<S.SiteFooterSection>
					{slotHomeLinkPrefix && slotHomeLinkPrefix}
					<a href='http://arcade.absolutholz.de'>
						<LogoTextInline />
					</a>
				</S.SiteFooterSection>
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
		</PageLayoutContainer>
	);
}
