import styled from "styled-components";
import { Card } from "../Card";
import { Elevation } from "../Elevation";
import { SpacingSize, TypoSize, TypoWeight } from "../..";

export const CardBillboard = styled(Card).attrs({
	tag: "article",
})`
	aspect-ratio: 16 / 9;
	display: flex;
	flex-direction: column-reverse;
	overflow: hidden;
	padding: ${SpacingSize.x100} 0 ${SpacingSize.x100} ${SpacingSize.x100};
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
	padding: ${SpacingSize.x050} ${SpacingSize.x100};
`;

export const CardBillboardHeadline = styled.h3`
	font-size: ${TypoSize.x150};
	font-weight: ${TypoWeight.Normal};
	margin: 0;
`;

export const CardBillboardCoverLink = styled.a`
	color: inherit;
	text-decoration: none;

	&::before {
		content: "";
		display: block;
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;
