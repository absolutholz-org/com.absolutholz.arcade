import SvgO from 'mdi-react/CircleOutlineIcon';
import SvgCat from 'mdi-react/CatIcon';
import SvgSun from 'mdi-react/WeatherSunnyIcon';
import SvgHamburger from 'mdi-react/HamburgerIcon';

import SvgX from 'mdi-react/WindowCloseIcon';
import SvgDog from 'mdi-react/DogIcon';
import SvgMoon from 'mdi-react/WeatherNightIcon';
import SvgHotDog from 'mdi-react/FoodHotDogIcon';

import { Icon, IconSize } from '@arcade/components';

import { IGamePieceIconProps } from './IGamePieceIcon';
import { useGameConfiguration } from '../../context/GameConfiguration';
import { GameTheme, TicTacToePiece } from '../../enums';

export function GamePieceIcon({
	iconSize = IconSize.Full,
	piece,
	theme,
	...props
}: IGamePieceIconProps): JSX.Element {
	const { gameTheme } = useGameConfiguration();
	theme = theme ?? gameTheme;

	let icon;
	if (theme === GameTheme.CatsDogs) {
		icon = piece === TicTacToePiece.O ? SvgCat : SvgDog;
	} else if (theme === GameTheme.SunMoon) {
		icon = piece === TicTacToePiece.O ? SvgSun : SvgMoon;
	} else if (theme === GameTheme.HamburgerHotDog) {
		icon = piece === TicTacToePiece.O ? SvgHamburger : SvgHotDog;
	} else {
		icon = piece === TicTacToePiece.O ? SvgO : SvgX;
	}

	return <Icon size={iconSize} icon={icon} {...props} />;
}
