import { ColorScheme } from '../../enums';

import { useSiteColorScheme } from '../../context';

import { IColorSchemeToggler } from './IColorSchemeToggler';
import * as S from './ColorSchemeToggler.styled';
import { useEffect } from 'react';

// import SvgSchemeAuto from 'mdi-react/ThemeLightDarkIcon';
// import SvgSchemeLight from 'mdi-react/WeatherSunnyIcon';
// import SvgSchemeDark from 'mdi-react/WeatherNightIcon';

export function ColorSchemeToggler({
	children,
	...restProps
}: IColorSchemeToggler): JSX.Element {
	const { siteColorScheme, setSiteColorScheme } = useSiteColorScheme();
	// const [schemeIcon, setSchemeIcon] =
	// 	useState<typeof MdiReactIconComponentType>(SvgSchemeAuto);

	const toggleState = () => {
		switch (siteColorScheme) {
			case ColorScheme.Auto:
				setSiteColorScheme(ColorScheme.Light);
				break;
			case ColorScheme.Light:
				setSiteColorScheme(ColorScheme.Dark);
				break;
			default:
				setSiteColorScheme(ColorScheme.Auto);
		}
	};

	return (
		<S.Toggler
			aria-label='Click to toggle light, dark or system color schemes'
			title='Click to toggle light, dark or system color schemes'
			onClick={toggleState}
			{...restProps}>
			{children}
			{/* <Icon icon={schemeIcon} size={IconSize.x150} /> */}
		</S.Toggler>
	);
}
