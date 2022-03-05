import SvgO from 'mdi-react/CircleOutlineIcon';
import SvgCat from 'mdi-react/CatIcon';
import SvgSun from 'mdi-react/WeatherSunnyIcon';
import SvgHamburger from 'mdi-react/HamburgerIcon';

import { Icon, IconSize } from '@arcade/components';

import { IIconOProps } from './IIconO';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameTheme } from '../../enums';

export function IconO({ iconSize = IconSize.Full }: IIconOProps): JSX.Element {
	const { gameTheme } = useGameConfiguration();

	let icon;
	if (gameTheme === GameTheme.CatsDogs) {
		icon = SvgCat;
	} else if (gameTheme === GameTheme.SunMoon) {
		icon = SvgSun;
	} else if (gameTheme === GameTheme.HamburgerHotDog) {
		icon = SvgHamburger;
	} else {
		icon = SvgO;
	}

	return <Icon size={iconSize} icon={icon} />;
}
