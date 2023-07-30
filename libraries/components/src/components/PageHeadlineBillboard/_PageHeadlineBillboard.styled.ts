import styled from '@emotion/styled';

import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { Typography } from '../Typography';
import { space } from '../../foundations/spacing/space';

export const PageHeadlineBillboard = styled.div`
	align-items: end;
	aspect-ratio: 16 / 9;
	display: flex;
	position: relative;

	@media screen and (min-width: 800px) {
		aspect-ratio: auto;
		min-height: 25rem;
	}
`;

export const PageHeadlineBillboard_img = styled.img`
	height: 100%;
	inset: 0;
	object-fit: cover;
	position: absolute;
	width: 100%;

	@media (prefers-color-scheme: dark) {
		opacity: 0.9;
	}
`;

export const PageHeadlineBillboard_PageGridContainer = styled(
	PageGridContainer
)`
	padding-block: ${space('xxl')};
	position: relative;
	width: 100%;
	z-index: 1;
`;

export const PageHeadlineBillboard_h1 = styled(Typography)`
	color: hsl(0 0% 100%);
	margin: 0;
	position: relative;

	&::before {
		background: hsl(0deg 0% 0% / 0.5);
		bottom: -0.5em;
		content: '';
		left: 50%;
		position: absolute;
		top: -0.25em;
		transform: translateX(-50%);
		width: 100vw;
		z-index: -1;
	}
`;
