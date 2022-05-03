import styled from 'styled-components';

import { PlayerColor } from '@arcade/library-common';

export const GameboardButton = styled.button<{ $color: PlayerColor | null }>`
	--line-width: 0.625em;
	--line-outline-width: calc(var(--line-width) / 4);
	--line-color: ${({ $color }) =>
		$color !== null ? $color : 'var(--on-surface)'};
	--line-button-width: 3rem;
	--line-button-length: calc(100% - var(--line-button-width));

	position: absolute;
	height: var(--line-button-width);
	width: calc(100% - var(--line-button-width));

	&::before {
		background-color: var(--line-color);
		border: var(--line-outline-width) solid var(--surface);
		border-radius: 6px;
		content: '';
		display: block;
		height: var(--line-width);
		width: 100%;
	}

	&:active {
	}

	&:hover,
	&:focus-visible {
	}

	&:disabled {
	}
`;
