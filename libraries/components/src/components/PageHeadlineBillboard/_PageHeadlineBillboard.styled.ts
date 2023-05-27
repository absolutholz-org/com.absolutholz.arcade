import styled from '@emotion/styled';

import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { Typography } from '../Typography';

export const PageHeadlineBillboard = styled.div`
	align-items: end;
	display: flex;
	min-height: 500px;
	position: relative;
`;

export const PageHeadlineBillboard_img = styled.img`
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;

	@media (prefers-color-scheme: dark) {
		opacity: 0.9;
	}
`;

export const PageHeadlineBillboard_PageGridContainer = styled(
	PageGridContainer
)`
	padding-block: var(--space-2xl);
	position: relative;
	width: 100%;
	z-index: 1;
`;

export const PageHeadlineBillboard_h1 = styled(Typography)`
	color: hsl(0deg 0% 100%);
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
