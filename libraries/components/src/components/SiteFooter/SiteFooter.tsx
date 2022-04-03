import { useState } from 'react';

import { ColorScheme } from '../../enums';
import { IconSize } from '../Icon';

import MdiReactIconComponentType from 'mdi-react';

import { Icon } from '../Icon';
import { LogoInlineText } from '../LogoInlineText';
import { PageLayoutContainer } from '../PageLayoutContainer';

import type { ISiteFooter } from './ISiteFooter';
import * as S from './SiteFooter.styled';

import SvgSchemeAuto from 'mdi-react/ThemeLightDarkIcon';
import SvgSchemeLight from 'mdi-react/WeatherSunnyIcon';
import SvgSchemeDark from 'mdi-react/WeatherNightIcon';

export function SiteFooter({ slotHomeLinkPrefix }: ISiteFooter): JSX.Element {
	const [schemeIcon, setSchemeIcon] =
		useState<typeof MdiReactIconComponentType>(SvgSchemeAuto);
	const [schemeText, setSchemeText] = useState<string>('System');

	const handleColorSchemeChange = (scheme: ColorScheme) => {
		if (scheme === ColorScheme.Light) {
			setSchemeIcon(SvgSchemeLight);
			setSchemeText('Light');
		} else if (scheme === ColorScheme.Dark) {
			setSchemeIcon(SvgSchemeDark);
			setSchemeText('Dark');
		} else {
			setSchemeIcon(SvgSchemeAuto);
			setSchemeText('System');
		}
	};

	return (
		<PageLayoutContainer>
			<S.SiteFooter>
				<S.SiteFooterSection>
					{slotHomeLinkPrefix && slotHomeLinkPrefix}
					<a href='http://arcade.absolutholz.de'>
						<LogoInlineText />
					</a>
				</S.SiteFooterSection>
				<S.SiteFooterSection>
					<S.ColorScheme>
						Color Mode:
						<S.ColorSchemeToggler
							onSchemeChange={handleColorSchemeChange}>
							<Icon icon={schemeIcon} size={IconSize.x125} />{' '}
							{schemeText}
						</S.ColorSchemeToggler>
					</S.ColorScheme>
				</S.SiteFooterSection>
			</S.SiteFooter>
		</PageLayoutContainer>
	);
}
