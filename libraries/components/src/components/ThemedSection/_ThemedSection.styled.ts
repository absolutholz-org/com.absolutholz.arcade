import styled from '@emotion/styled';

import { PageGridContainer } from '../PageGrid/PageGridContainer';

export const ThemedSection = styled.div`
	padding-block: 2rem;
	background: forestgreen;
	/* background-image: radial-gradient(
			ellipse at left,
			transparent 50%,
			#eaeaea 50%
		),
		radial-gradient(ellipse at right, transparent 50%, #eaeaea 50%);
	background-size: 50% 100%;
	background-repeat: no-repeat;
	background-position: left top, right top; */

	background-image: radial-gradient(
			200% 100% at 25% 80%,
			transparent calc(50% - 100px),
			hsl(0 0% 100% / 0.125) 50%,
			transparent calc(50% + 5px)
		),
		radial-gradient(
			200% 100% at 75% 14%,
			transparent calc(50% - 5px),
			hsl(0 0% 100% / 0.125) 50%,
			transparent calc(50% + 100px)
		);
	background-position: left top, right top;
	background-repeat: no-repeat;
	background-size: 50% 100%;
`;
