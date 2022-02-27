import { FunctionComponent, useEffect, useState } from 'react';

import { ColorScheme } from '@arcade/common/enums/ColorScheme';
import { IconSize } from '@arcade/common/enums/IconSize';

import MdiReactIconComponentType from 'mdi-react';

import { Icon } from '../Icon';

import * as S from './ColorSchemeToggler.styled';

// import { ReactComponent as SvgSchemeAuto } from '@mdi/svg/svg/theme-light-dark.svg';
// import { ReactComponent as SvgSchemeLight } from '@mdi/svg/svg/weather-sunny.svg';
// import { ReactComponent as SvgSchemeDark } from '@mdi/svg/svg/weather-night.svg';

import SvgSchemeAuto from 'mdi-react/ThemeLightDarkIcon';
import SvgSchemeLight from 'mdi-react/WeatherSunnyIcon';
import SvgSchemeDark from 'mdi-react/WeatherNightIcon';

const STORAGE_KEY = 'absolutholz.arcade:color-theme';
const HTML_SCHEME_ATTRIBUTE = 'data-color-scheme';

const elHtml = document.getElementsByTagName('html')[0];

export function ColorSchemeToggler(): JSX.Element {
	const [scheme, setScheme] = useState<ColorScheme>(ColorScheme.Auto);
	const [schemeIcon, setSchemeIcon] = useState<
		typeof MdiReactIconComponentType
	>(<SvgSchemeAuto />);

	const toggleState = () => {
		switch (scheme) {
			case ColorScheme.Auto:
				setScheme(ColorScheme.Light);
				break;
			case ColorScheme.Light:
				setScheme(ColorScheme.Dark);
				break;
			default:
				setScheme(ColorScheme.Auto);
		}
	};

	useEffect(() => {
		switch (localStorage.getItem(STORAGE_KEY)) {
			case ColorScheme.Light:
				setScheme(ColorScheme.Light);
				break;
			case ColorScheme.Dark:
				setScheme(ColorScheme.Dark);
				break;
			default:
				setScheme(ColorScheme.Auto);
		}
	}, []);

	useEffect(() => {
		if (scheme === ColorScheme.Light) {
			elHtml.setAttribute(HTML_SCHEME_ATTRIBUTE, 'light');
			setSchemeIcon(<SvgSchemeLight />);
			localStorage.setItem(STORAGE_KEY, ColorScheme.Light);
		} else if (scheme === ColorScheme.Dark) {
			elHtml.setAttribute(HTML_SCHEME_ATTRIBUTE, 'dark');
			setSchemeIcon(<SvgSchemeDark />);
			localStorage.setItem(STORAGE_KEY, ColorScheme.Dark);
		} else {
			elHtml.removeAttribute(HTML_SCHEME_ATTRIBUTE);
			setSchemeIcon(<SvgSchemeAuto />);
			localStorage.removeItem(STORAGE_KEY);
		}
	}, [scheme]);

	return (
		<S.Wrapper>
			<S.Toggler
				aria-label='Click to toggle light, dark or system color schemes'
				title='Click to toggle light, dark or system color schemes'
				onClick={toggleState}>
				{/* <Icon size={IconSize.x150}>{schemeIcon}</Icon> */}
				{schemeIcon}
			</S.Toggler>
		</S.Wrapper>
	);
}
