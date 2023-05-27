import { css } from '@emotion/react';

/**
 * @link https://utopia.fyi/type/calculator?c=320,16,1.2,1240,18,1.618,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
 */
export const typographyCss = css`
	--typo-size-xs: clamp(0.7rem, calc(0.81rem + -0.13vw), 0.78rem);
	--typo-size--s: clamp(0.94rem, calc(0.94rem + 0vw), 0.94rem);
	--typo-size-m: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
	--typo-size-l: clamp(1.35rem, calc(1.24rem + 0.55vw), 1.67rem);
	--typo-size-xl: clamp(1.62rem, calc(1.41rem + 1.05vw), 2.22rem);
	--typo-size-xxl: clamp(1.94rem, calc(1.59rem + 1.77vw), 2.96rem);
	--typo-size-xxxl: clamp(2.33rem, calc(1.77rem + 2.81vw), 3.95rem);
	--typo-size-xxxxl: clamp(2.8rem, calc(1.94rem + 4.28vw), 5.26rem);

	--typo-family-native: system-ui, -apple-system, BlinkMacSystemFont,
		'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
`;
