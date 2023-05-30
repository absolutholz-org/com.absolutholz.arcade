import styled from '@emotion/styled';
import { Icon } from '../Icon';

const CORNER_SIZE = '3.5rem';
const BORDER_SIZE = '6px';

export const Dialog = styled.dialog`
	--dialog-surface: white;
	--dialog-on-surface: black;
	--dialog-border: black;
	--dialog-icon-surface: white;
	--dialog-icon-on-surface: black;
	--dialog-icon-border: black;
	background: var(--dialog-surface);
	border: ${BORDER_SIZE} solid var(--dialog-border);
	border-radius: 48px / 50%;
	color: var(--dialog-on-surface);
	max-width: min(30rem, calc(100% - 4rem));
	overflow: visible;
	padding: 5rem 2rem 2rem;
	position: relative;
	text-align: center;
	width: 100%;

	&::before {
		border: inherit;
		border-radius: 58px / 50%;
		content: '';
		pointer-events: none;
		position: absolute;
		inset: -20px;

		clip-path: polygon(
			evenodd,
			0 0,
			0 100%,
			100% 100%,
			100% 0,
			0 0,
			/* top left */ 0% calc(${CORNER_SIZE} - 1rem),
			calc(${CORNER_SIZE} + 1rem) calc(${CORNER_SIZE} - 1rem),
			calc(${CORNER_SIZE} + 1rem) 0%,
			/* top right */ calc(100% - ${CORNER_SIZE} - 1rem) 0%,
			calc(100% - ${CORNER_SIZE} - 1rem) calc(${CORNER_SIZE} - 1rem),
			100% calc(${CORNER_SIZE} - 1rem),
			/* bottom right */ 100% calc(100% - ${CORNER_SIZE} + 1rem),
			calc(100% - ${CORNER_SIZE} - 1rem)
				calc(100% - ${CORNER_SIZE} + 1rem),
			calc(100% - ${CORNER_SIZE} - 1rem) 100%,
			/* bottom left */ calc(${CORNER_SIZE} + 1rem) 100%,
			calc(${CORNER_SIZE} + 1rem) calc(100% - ${CORNER_SIZE} + 1rem),
			0% calc(100% - ${CORNER_SIZE} + 1rem)
		);
	}
`;

export const Dialog_IconShell = styled.div`
	align-items: center;
	aspect-ratio: 1 / 1;
	background-color: inherit;
	background-image: radial-gradient(
		farthest-side at center 100%,
		transparent calc(100% - ${BORDER_SIZE} - 1px),
		var(--dialog-border) calc(100% - ${BORDER_SIZE})
	);
	background-repeat: no-repeat;
	background-size: 100% 50%;
	border-radius: 50%;
	display: flex;
	height: 10rem;
	justify-content: center;
	left: 50%;
	position: absolute;
	top: 0;
	transform: translate(-50%, -50%);
`;

export const Dialog_Icon = styled(Icon)`
	background: var(--dialog-icon-surface);
	border: 4px solid var(--dialog-icon-border);
	border-radius: 50%;
	color: var(--dialog-icon-on-surface);
	height: calc(100% - 3rem);
	padding: 0.5rem;
	width: calc(100% - 3rem);
`;
