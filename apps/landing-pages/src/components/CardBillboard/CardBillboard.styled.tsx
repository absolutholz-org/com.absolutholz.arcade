import styled from 'styled-components';

import {
	Card,
	color,
	elevate,
	space,
	typoFamilyCss,
	typoSizeCss,
} from '@arcade/library-components';

export const CardBillboard = styled(Card).attrs({
	tag: 'article',
})`
	aspect-ratio: 16 / 9;
	display: flex;
	flex-direction: column-reverse;
	overflow: hidden;
	padding: ${space(100)} 0 ${space(100)} ${space(100)};
	position: relative;
	z-index: 0;
`;

export const CardBillboardBackground = styled.img`
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -1;
`;

export const CardBillboardChildren = styled.div`
	${elevate(2)}
	color: ${color('primary')};
	background-color: ${color('surface')};
	border-radius: 10px / 50%;
	border-end-end-radius: 0;
	border-start-end-radius: 0;
	padding: ${space(50)} ${space(100)};
`;

export const CardBillboardHeadline = styled.h4`
	${typoFamilyCss('headline')}
	${typoSizeCss(150)}
	margin-block: 0;
`;

export const CardBillboardCoverLink = styled.a`
	color: inherit;
	text-decoration: none;

	&::before {
		content: '';
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;

export const CardBillboardGrid = styled.div`
	--tsr-list-max-columns: 6;
	--tsr-list-tsr-width: 18.75rem;

	display: grid;
	gap: ${space(200)} var(--gutter);
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(
		auto-fill,
		minmax(
			clamp(
				100% / var(--tsr-list-max-columns) - var(--gutter),
				var(--tsr-list-tsr-width),
				100%
			),
			1fr
		)
	);
`;
