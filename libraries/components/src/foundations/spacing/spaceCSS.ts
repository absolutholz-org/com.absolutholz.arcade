import { css } from '@emotion/react';

/**
 * @link https://utopia.fyi/space/calculator?c=320,16,1.2,1240,18,1.618,5,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
 */
export const spaceCss = css`
	--space-xxxs: clamp(0.31rem, calc(0.31rem + 0vw), 0.31rem);
	--space-xxs: clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem);
	--space-xs: clamp(0.88rem, calc(0.85rem + 0.11vw), 0.94rem);
	--space-s: clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem);
	--space-m: clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem);
	--space-l: clamp(2.25rem, calc(2.16rem + 0.43vw), 2.5rem);
	--space-xl: clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem);
	--space-xxl: clamp(4.5rem, calc(4.33rem + 0.87vw), 5rem);
	--space-xxxl: clamp(6.75rem, calc(6.49rem + 1.3vw), 7.5rem);
`;
