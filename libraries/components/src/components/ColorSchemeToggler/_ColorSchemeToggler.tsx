import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsIcon from '@mui/icons-material/Settings';

import { ColorScheme, useSiteColorScheme } from '../../contexts';
import { SegmentedControl } from '../SegmentedControl';

import type { IColorSchemeToggler } from './_ColorSchemeToggler.types';

export function ColorSchemeToggler({
	isTextVisible = true,
}: IColorSchemeToggler): JSX.Element {
	const { siteColorScheme, setSiteColorScheme } = useSiteColorScheme();

	const toggleState = (scheme: string) => {
		setSiteColorScheme(scheme as ColorScheme);
	};

	return (
		<SegmentedControl
			controls={[
				{
					icon: SettingsIcon,
					isSelected: siteColorScheme === 'system',
					text: isTextVisible ? 'System' : undefined,
					value: 'system',
				},
				{
					icon: LightModeIcon,
					isSelected: siteColorScheme === 'light',
					text: isTextVisible ? 'Light' : undefined,
					value: 'light',
				},
				{
					icon: DarkModeIcon,
					isSelected: siteColorScheme === 'dark',
					text: isTextVisible ? 'Dark' : undefined,
					value: 'dark',
				},
			]}
			onClick={toggleState}
		/>
	);
}
