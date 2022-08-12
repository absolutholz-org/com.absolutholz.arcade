import { css } from "styled-components";

import { ColorDarkHsl } from "./ColorDarkHsl";

export const DarkColorSchemeCSS = css`
	--theme-base: ${ColorDarkHsl.Grey900};
	--theme-base-primary: ${ColorDarkHsl.Grey100};
	--theme-base-secondary: ${ColorDarkHsl.Grey800};
	--theme-base-tertiary: ${ColorDarkHsl.Grey200};
	--theme-base-accent: ${ColorDarkHsl.Blue};
	--theme-base-error: ${ColorDarkHsl.Red};

	--theme-alt: ${ColorDarkHsl.Grey800};
	--theme-alt-primary: var(--theme-base-primary);
	--theme-alt-secondary: var(--theme-base-secondary);
	--theme-alt-tertiary: var(--theme-base-tertiary);
	--theme-alt-accent: var(--theme-base-accent);
	--theme-alt-error: var(--theme-base-error);

	--theme-image: ${ColorDarkHsl.Grey900};
	--theme-image-primary: ${ColorDarkHsl.Grey100};
	--theme-image-secondary: ${ColorDarkHsl.Grey800};
	--theme-image-tertiary: ${ColorDarkHsl.Grey200};
	--theme-image-accent: var(--theme-base-accent);
	--theme-image-error: var(--theme-base-error);

	/* --surface-default: ${ColorDarkHsl.Grey900};
	--surface-alt1: ${ColorDarkHsl.Grey700};

	--primary: ${ColorDarkHsl.Grey100};
	--on-primary: ${ColorDarkHsl.Grey900};

	--secondary: ${ColorDarkHsl.Grey200};
	--on-secondary: ${ColorDarkHsl.Grey900};

	--accent: ${ColorDarkHsl.Blue};
	--on-accent: ${ColorDarkHsl.Grey900};

	--error: ${ColorDarkHsl.Red};
	--on-error: ${ColorDarkHsl.Grey900}; */

	--player-red: 1deg 83% 63%; // Red 400
	--on-player-red: 0deg 0% 0%;

	--player-blue: 207deg 90% 61%; // Blue 400
	--on-player-blue: 0deg 0% 0%;

	--player-purple: 262deg 52% 47%; // Deep Purple 500
	--on-player-purple: 0deg 0% 100%;

	--player-green: 122deg 39% 49%; // Green 500
	--on-player-green: 0deg 0% 100%;

	--player-yellow: 54deg 100% 67%; // Yellow 400
	--on-player-yellow: 0deg 0% 0%;

	--player-orange: 36deg 100% 50%; // Orange 500
	--on-player-orange: 0deg 0% 0%;
`;
