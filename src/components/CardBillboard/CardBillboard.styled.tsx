import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Card } from '../Card';
import { Elevation } from '../Elevation';

export const CardBillboard = styled(Card).attrs({
	tag: 'article',
})`
	aspect-ratio: 16 / 9;
	display: flex;
	flex-direction: column-reverse;
	overflow: hidden;
	padding: 1rem 0 1rem 1rem;
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
	${Elevation(2)}
	background: hsla(var(--surface-hsl), 0.85);
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	padding: 0.5rem 1rem;
`;

export const CardBillboardHeadline = styled.h3`
	font-size: 1.5rem;
	font-weight: 400;
	margin: 0;
`;

export const CardBillboardCoverLink = styled(Link)`
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
