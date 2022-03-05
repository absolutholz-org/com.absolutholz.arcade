import { useEffect, useState } from 'react';
import MdiReactIconComponentType from 'mdi-react';

import SvgX from 'mdi-react/WindowCloseIcon';
import SvgDog from 'mdi-react/DogIcon';
import SvgMoon from 'mdi-react/WeatherNightIcon';
import SvgHotDog from 'mdi-react/FoodHotDogIcon';

import { Icon, IconSize } from '@arcade/components';

import { IIconXProps } from './IIconX';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameTheme } from '../../enums';

export function IconX({
	theme,
	iconSize = IconSize.Full,
}: IIconXProps): JSX.Element {
	const { gameTheme } = useGameConfiguration();
	theme = theme ?? gameTheme;

	let icon;
	if (theme === GameTheme.CatsDogs) {
		icon = SvgDog;
	} else if (theme === GameTheme.SunMoon) {
		icon = SvgMoon;
	} else if (theme === GameTheme.HamburgerHotDog) {
		icon = SvgHotDog;
	} else {
		icon = SvgX;
	}

	return <Icon size={iconSize} icon={icon} />;
}
