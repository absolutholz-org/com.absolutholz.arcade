import styled, { css } from 'styled-components';

import { typoFamilyCss, typoSizeCss } from '../../foundations';
import { VerticallyPaddedContainer } from '../layout/VerticallyPaddedContainer';

export const Billboard = styled.div<{ $withBackground?: boolean }>`
	${({ $withBackground = true }) =>
		$withBackground &&
		css`
			/* https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/ */
			background-image: linear-gradient(hsl(0 200% 50% / 0.9), transparent),
				linear-gradient(to top left, hsl(120 100% 50% / 0.9), transparent),
				linear-gradient(to top right, hsl(240 100% 50% / 0.9), transparent);
		`}
	background-blend-mode: screen;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: end;
	min-height: 20rem;
	position: relative;
	z-index: 0;

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const BillboardContent = styled(VerticallyPaddedContainer)`
	position: relative;
	z-index: 2;
`;

export const BillboardHeadline = styled.h1`
	${typoSizeCss(300)}
	${typoFamilyCss('brand')}
	font-weight: 400;
	margin-block: 0;
`;

export const BillboardBackground = styled.div`
	> img {
		height: 100%;
		left: 0;
		object-fit: cover;
		opacity: 0.8;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
	}
`;
