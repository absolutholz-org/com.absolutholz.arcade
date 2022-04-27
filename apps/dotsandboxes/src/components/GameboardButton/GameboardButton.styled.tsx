import styled, { css } from 'styled-components';

export const GameboardButton = styled.button<{ color: string }>`
	--line-width: 0.625em;
	--line-outline-width: calc(var(--line-width) / 4);
	--line-color: ${({ color }) =>
		color !== '' ? color : 'var(--on-surface)'};

	height: 100%;
	position: absolute;
	transform: rotate(var(--rotation));
	width: 100%;

	&::before {
		background-image: linear-gradient(var(--line-color), var(--line-color));
		background-size: calc(100% - (var(--line-width) / 2))
			calc(100% - (var(--line-width) / 2));
		border: var(--line-outline-width) solid var(--surface);
		content: '';
		display: block;
		height: var(--line-width);
		transform: rotate(45deg);
		width: 100%;
	}

	&:active {
		/* background: hsl(0, 100%, 50%, 0.1); */
	}

	&:hover,
	&:focus-visible {
		/* background: hsl(240, 100%, 50%, 0.1); */
	}

	&:disabled {
		&::before {
			height: 8px;
		}
	}
`;
