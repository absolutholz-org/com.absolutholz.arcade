import styled from 'styled-components';

import { color, Icon, radius, space } from '@arcade/library-components';

const DIVIDER_THICKNESS = '2px';

export const PlayerPrompt = styled.div`
	background-color: ${color('primary', 0.06)};
	border-radius: 14px / 50%;
	display: block;
	padding: ${space(100)};
	position: relative;
	width: 100%;

	&::before {
		border-radius: ${radius('elliptical')};
		// https://stackoverflow.com/questions/2771171/control-the-dashed-border-stroke-length-and-distance-between-strokes
		border: 3px dashed ${color('primary', 0.25)};
		bottom: 0.5rem;
		content: '';
		display: block;
		left: 0.5rem;
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
	}
`;

export const PlayerPromptSplitGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: calc((var(--gutter) * 2) + ${DIVIDER_THICKNESS});
	position: relative;

	&::after {
		background-color: currentColor;
		content: '';
		opacity: 0.3;
		inset: 0 calc(50% + ${DIVIDER_THICKNESS}) 0 auto;
		position: absolute;
		width: ${DIVIDER_THICKNESS};
	}
`;

export const PlayerPromptButton = styled.button`
	display: flex;
	justify-content: center;
	padding-block: ${space(100)};
	width: 100%;
`;

export const PlayerPromptIcon = styled(Icon)`
	font-size: 2.5rem;
	opacity: 0.65;
`;
