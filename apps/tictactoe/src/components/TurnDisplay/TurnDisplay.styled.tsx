import styled from "styled-components";

import {
	Elevation,
	SpacingSize,
	TypoSize,
	TypoWeight,
} from "@arcade/library-components";

export const Dialog = styled.dialog`
	background: none;
	border: 0;
	color: var(--on-surface);
	font-size: ${TypoSize.x200};
	font-weight: ${TypoWeight.Light};
	flex-direction: column;
	height: 100%;
	justify-content: center;
	line-height: 1;
	margin-left: 0;
	margin-right: 0;
	max-width: none;
	padding: 0;
	width: 100%;

	&::backdrop {
		/* background: hsl(0, 0%, 0%, 0.7);
		backdrop-filter: blur(5px); */
	}

	&[open] {
		display: flex;
	}
`;

export const DialogBackground = styled.div`
	@keyframes dialogFadeInOut {
		0% {
			filter: blur(50px);
			opacity: 0;
		}
		20% {
			filter: blur(0);
			opacity: 1;
		}
		80% {
			filter: blur(0);
			opacity: 1;
		}
		100% {
			filter: blur(50px);
			opacity: 0;
		}
	}

	${Elevation(24)}
	animation: dialogFadeInOut 2.25s forwards ease-in-out;
	background-color: var(--surface);
	display: flex;
	justify-content: center;
	overflow: hidden;
	padding: ${SpacingSize.x150};

	@media (prefers-reduced-motion) {
		animation: none;
	}
`;

export const Content = styled.div`
	@keyframes textFadeInOut {
		0% {
			opacity: 0;
			transform: translateX(-50vw);
		}
		20% {
			opacity: 1;
			transform: translateX(0);
		}
		80% {
			opacity: 1;
			transform: translateX(0);
		}
		100% {
			opacity: 0;
			transform: translateX(50vw);
		}
	}

	animation: textFadeInOut 2s forwards ease-in-out;

	@media (prefers-reduced-motion) {
		animation: none;
	}
`;
