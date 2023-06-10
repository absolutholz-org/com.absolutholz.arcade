import styled from '@emotion/styled';

import { space } from '@arcade/library-components/src/components/Space';
import { color } from '@arcade/library-components/src/components/Theme';

export const GameBoard = styled.div`
	background-color: ${color('accent')};
	border-radius: 0.5rem;
	padding: ${space('xs')};
`;

export const GameBoard_Title = styled.div`
	background-color: #fff;
	color: #f25d27;
	display: flex;
	justify-content: center;
	/* font-size: 15vw;
	font-weight: bold;
	letter-spacing: 3vw;
	line-height: 1; */
	margin-bottom: ${space('xxs')};
	/* text-align: center; */

	> svg {
		aspect-ratio: 1 / 1;
		dominant-baseline: central;
		fill: currentColor;
		font-weight: bold;
		height: 15vw;
		text-anchor: middle;
	}
`;

export const GameBoard_Grid = styled.div`
	/* border: 2px solid hsl(0 0% 50% / 0.2); */
	display: grid;
	gap: ${space('xxxs')};
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);

	/* > *:nth-of-type(odd) {
		background-color: hsl(0 0% 50% / 0.2);
	} */
`;

export const GameBoard_Field = styled.div`
	aspect-ratio: 1 / 1;
	background-color: #fff;
	border-radius: 0.25rem;
	padding: min(5%, ${space('xs')});
`;
