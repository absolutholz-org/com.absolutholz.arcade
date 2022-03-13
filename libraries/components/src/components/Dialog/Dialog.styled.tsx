import styled, { keyframes } from 'styled-components';
import { SpacingSize } from '../../enums';

import { Elevation } from '../Elevation';

const appear = keyframes`
	from {
		opacity: 0;
		transform: translateX(-3rem);
	}

	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const Dialog = styled.dialog`
	${Elevation(24)}
	background-color: var(--surface);
	border: 0;
	border-radius: 3px;
	color: var(--on-surface);
	max-width: min(500px, 100% - (var(--offset) * 2));
	min-width: min(250px, 100% - (var(--offset) * 2));
	text-align: start;

	&::backdrop {
		background: hsl(0, 0%, 0%, 0.7);
		backdrop-filter: blur(5px);
	}

	&[open] {
		animation: ${appear} 150ms cubic-bezier(0, 1.8, 1, 1.8);
	}
`;

export const Footer = styled.div`
	margin-top: ${SpacingSize.x100};
`;

export const ButtonBar = styled(Footer)`
	display: flex;
	gap: var(--gutter);
	justify-content: end;
`;
