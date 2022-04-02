import { useState } from 'react';

import { ColorScheme } from '../../enums';
import { IconSize } from '../Icon';

import MdiReactIconComponentType from 'mdi-react';

import { Icon } from '../Icon';

import { ColorSchemeToggler } from '../ColorSchemeToggler';
import { PageLayoutContainer } from '../PageLayoutContainer';
import * as S from './SiteFooter.styled';

import SvgSchemeAuto from 'mdi-react/ThemeLightDarkIcon';
import SvgSchemeLight from 'mdi-react/WeatherSunnyIcon';
import SvgSchemeDark from 'mdi-react/WeatherNightIcon';

export function SiteFooter(): JSX.Element {
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
				<S.ColorScheme>
					Color Mode:
					<S.ColorSchemeToggler
						onSchemeChange={handleColorSchemeChange}>
						<Icon icon={schemeIcon} size={IconSize.x125} />{' '}
						{schemeText}
					</S.ColorSchemeToggler>
				</S.ColorScheme>
			</S.SiteFooter>
		</PageLayoutContainer>
	);
}
