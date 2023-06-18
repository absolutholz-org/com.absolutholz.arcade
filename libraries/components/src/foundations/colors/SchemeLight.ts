import { css } from '@emotion/react';

import { ColorLightHsl } from './ColorLightHsl';

export const LightColorSchemeCSS = css`
	--theme-base: ${ColorLightHsl.Grey100};
	--theme-base-primary: ${ColorLightHsl.Grey900};
	--theme-base-secondary: ${ColorLightHsl.Grey800};
	--theme-base-tertiary: ${ColorLightHsl.Grey700};
	--theme-base-accent: ${ColorLightHsl.BlueDark2};
	--theme-base-error: ${ColorLightHsl.RedDark2};

	--theme-alt: ${ColorLightHsl.Grey300};
	--theme-alt-primary: var(--theme-base-primary);
	--theme-alt-secondary: var(--theme-base-secondary);
	--theme-alt-tertiary: var(--theme-base-tertiary);
	--theme-alt-accent: var(--theme-base-accent);
	--theme-alt-error: var(--theme-base-error);

	--theme-image: ${ColorLightHsl.Grey900};
	--theme-image-primary: ${ColorLightHsl.Grey100};
	--theme-image-secondary: ${ColorLightHsl.Grey800};
	--theme-image-tertiary: ${ColorLightHsl.Grey200};
	--theme-image-accent: var(--theme-base-accent);
	--theme-image-error: var(--theme-base-error);

	--player-red: 0deg 65% 51%; // Red 700
	--on-player-red: 0deg 0% 100%;

	--player-blue: 212deg 80% 42%; // Blue 800
	--on-player-blue: 0deg 0% 100%;

	--player-purple: 255deg 61% 39%; // Deep Purple 800
	--on-player-purple: 0deg 0% 100%;

	--player-green: 123deg 46% 34%; // Green 800
	--on-player-green: 0deg 0% 100%;

	--player-yellow: 43deg 96% 58%; // Yellow 700
	--on-player-yellow: 0deg 0% 0%;

	--player-orange: 27deg 100% 47%; // Orange 800
	--on-player-orange: 0deg 0% 0%;
`;
