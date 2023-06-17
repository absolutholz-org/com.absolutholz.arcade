import { useSiteColorScheme } from '../../contexts';

import type { ColorSchemeTogglerProps } from './_ColorSchemeToggler.annotations';

export function ColorSchemeToggler({
}: ColorSchemeTogglerProps): JSX.Element {
	const { siteColorScheme, setSiteColorScheme } = useSiteColorScheme();

	const toggleState = () => {
		switch (siteColorScheme) {
			case 'system':
				setSiteColorScheme('light');
				break;
			case 'light':
				setSiteColorScheme('dark');
				break;
			default:
				setSiteColorScheme('system');
		}
	};

	return (
		<button
			aria-label='Click to toggle light, dark or system color schemes'
			title='Click to toggle light, dark or system color schemes'
			onClick={toggleState}
		>
			{siteColorScheme === 'light' && (
				'Light'
			)}
			{siteColorScheme === 'dark' && (
				'Dark'
			)}
			{siteColorScheme !== 'light' && siteColorScheme !== 'dark' && (
				'System'
			)}
		</button>
	);
}
