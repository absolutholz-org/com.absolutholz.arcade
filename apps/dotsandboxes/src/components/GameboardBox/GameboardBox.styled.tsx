import styled, { css } from 'styled-components';

import { Headline100 } from '@arcade/library-components';

import { GameboardButton } from '../GameboardButton';

export const GameboardBox = styled.div<{
	color?: string;
}>`
	align-items: center;
	aspect-ratio: 1 / 1;
	${({ color }) =>
		css`
			background-color: ${color};
		`}
	display: flex;
	justify-content: center;
	position: relative;
`;

export const ButtonTop = styled(GameboardButton)`
	left: calc(var(--line-button-width) / 2);
	top: calc((var(--line-button-width) / 2) * -1);
`;

export const ButtonLeft = styled(GameboardButton)`
	left: calc(var(--line-button-width) / 2);
	top: calc(var(--line-button-width) / 2);
	transform: rotate(90deg);
	transform-origin: top left;
`;

export const ButtonBottom = styled(GameboardButton)`
	bottom: calc((var(--line-button-width) / 2) * -1);
	left: calc(var(--line-button-width) / 2);
`;

export const ButtonRight = styled(GameboardButton)`
	right: calc(var(--line-button-width) / 2);
	top: calc(var(--line-button-width) / 2);
	transform: rotate(-90deg);
	transform-origin: top right;
`;

export const PlayerName = styled(Headline100)`
	max-width: calc(100% - 2rem);
	margin: 0;
	overflow: hidden;
	text-align: center;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
