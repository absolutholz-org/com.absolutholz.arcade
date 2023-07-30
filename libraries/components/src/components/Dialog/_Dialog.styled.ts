import styled from '@emotion/styled';
import MuiModal from '@mui/base/Modal';

import { space } from '../../foundations/spacing/space';

// import { Icon } from '../Icon';

const CORNER_SIZE = '3.5rem';
const BORDER_SIZE = '6px';

export const Modal = styled(MuiModal)`
	align-items: center;
	bottom: 0;
	display: flex;
	justify-content: center;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: 1;
`;

export const Modal_Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
	-webkit-tap-highlight-color: transparent;
`;

export const Dialog = styled.div`
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
	/* display: flex;
	flex-direction: column; */
	max-height: 80vh;
	max-width: min(40rem, calc(100% - 4rem));
	overflow: visible;
	padding: ${space('l')} ${space('xl')};
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

export const DialogWithIcon = styled(Dialog)`
	padding-top: clamp(2rem, calc(3rem + 5vw), 5.5rem);
`;

export const Dialog_Content = styled.div`
	overflow-y: auto;
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
	color: var(--dialog-icon-on-surface);
	display: flex;
	justify-content: center;
	left: 50%;
	padding: 2.5rem;
	position: absolute;
	top: 0;
	transform: translate(-50%, -50%);
	width: min(11rem, 33vw);
	z-index: 0;

	&::before {
		background-color: var(--dialog-icon-surface);
		border: 4px solid var(--dialog-icon-border);
		border-radius: inherit;
		content: '';
		inset: min(1.25rem, 15%);
		position: absolute;
		z-index: -1;
	}

	> svg {
		z-index: 3;
	}
`;

export const Dialog_IconEffect = styled.div`
	inset: 50%;
	position: absolute;
	z-index: 1;
`;
