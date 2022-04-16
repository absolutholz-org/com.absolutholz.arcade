import { css } from 'styled-components';
import { SurfaceTheme } from '../enums';

type ThemeProperties = {
	surface: string;
	onSurface: string;
};

function getSurfaceTheme(theme: SurfaceTheme): ThemeProperties {
	switch (theme) {
		case SurfaceTheme.Background2:
			return {
				surface: '--bg2',
				onSurface: '--primary',
			};
		case SurfaceTheme.Primary:
			return {
				surface: '--primary',
				onSurface: '--on-primary',
			};
		case SurfaceTheme.Secondary:
			return {
				surface: '--secondary',
				onSurface: '--on-secondary',
			};
		case SurfaceTheme.Accent:
			return {
				surface: '--accent',
				onSurface: '--on-accent',
			};
		case SurfaceTheme.Error:
			return {
				surface: '--error',
				onSurface: '--on-error',
			};
		default:
			return {
				surface: '--bg1',
				onSurface: '--primary',
			};
	}
}

type ThemeSurface = {
	theme: SurfaceTheme;
	includeBackground?: boolean;
	surfaceOpacity?: number;
	onSurfaceOpacity?: number;
};

export const themeSurface = ({
	theme,
	includeBackground = true,
	surfaceOpacity = 1,
	onSurfaceOpacity = 1,
}: ThemeSurface) => {
	const { surface, onSurface } = getSurfaceTheme(theme);

	return css`
		${includeBackground &&
		css`
			--surface: hsla(var(${surface}), ${surfaceOpacity});
			background-color: var(--surface);
		`}

		--on-surface: hsla(var(${includeBackground
			? onSurface
			: surface}), ${onSurfaceOpacity});
		color: var(${includeBackground ? '--on-surface' : '--surface'});
	`;
};
