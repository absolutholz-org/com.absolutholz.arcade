import { css } from '@emotion/react';

/**
 * @link https://utopia.fyi/grid/calculator?c=320,16,1.2,1240,18,1.618,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
 */
export const pageGridCss = css`
	--grid-max-width: 77.5rem;
	--grid-gutter: var(
		--space-s-l,
		clamp(1.13rem, calc(0.65rem + 2.39vw), 2.5rem)
	);
`;
