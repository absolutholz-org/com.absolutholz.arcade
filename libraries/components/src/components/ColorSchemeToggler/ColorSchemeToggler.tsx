import { useSiteColorScheme } from '../../contexts';
import { Icon } from '../Icon';

import { IColorSchemeToggler } from './ColorSchemeToggler.annotations';
import * as S from './ColorSchemeToggler.styled';

import { ReactComponent as SvgSchemeSystem } from '@mdi/svg/svg/theme-light-dark.svg';
import { ReactComponent as SvgSchemeLight } from '@mdi/svg/svg/weather-sunny.svg';
import { ReactComponent as SvgSchemeDark } from '@mdi/svg/svg/weather-night.svg';

export function ColorSchemeToggler({
	displayMode,
	...restProps
}: IColorSchemeToggler): JSX.Element {
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
		<S.ColorSchemeToggler
			aria-label='Click to toggle light, dark or system color schemes'
			title='Click to toggle light, dark or system color schemes'
			onClick={toggleState}
			{...restProps}>
			{siteColorScheme === 'light' && (
				<>
					{displayMode !== 'textonly' && (
						<S.ColorSchemeTogglerIcon icon={<SvgSchemeLight />} />
					)}
					{displayMode !== 'icononly' && (
						<S.ColorSchemeTogglerText>
							Light
						</S.ColorSchemeTogglerText>
					)}
				</>
			)}
			{siteColorScheme === 'dark' && (
				<>
					{displayMode !== 'textonly' && (
						<S.ColorSchemeTogglerIcon icon={<SvgSchemeDark />} />
					)}
					{displayMode !== 'icononly' && (
						<S.ColorSchemeTogglerText>
							Dark
						</S.ColorSchemeTogglerText>
					)}
				</>
			)}
			{siteColorScheme !== 'light' && siteColorScheme !== 'dark' && (
				<>
					{displayMode !== 'textonly' && (
						<S.ColorSchemeTogglerIcon icon={<SvgSchemeSystem />} />
					)}
					{displayMode !== 'icononly' && (
						<S.ColorSchemeTogglerText>
							System
						</S.ColorSchemeTogglerText>
					)}
				</>
			)}
		</S.ColorSchemeToggler>
	);
}
