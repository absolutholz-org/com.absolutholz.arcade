import styled from '@emotion/styled';

export const GameCardSymbol = styled.button`
	align-items: center;
	aspect-ratio: 1 / 1;
	border-radius: 0.25rem;
	display: flex;
	justify-content: center;
	padding: min(5%, var(--space-xs));
	position: relative;
`;

export const GameCardSymbol_Symbol = styled.img`
	max-height: 100%;
	max-width: 100%;
`;

export const GameCardSymbol_Check = styled.svg`
	background: radial-gradient(
			circle,
			white 50%,
			currentColor 50%,
			currentColor 70%,
			transparent 70%
		)
		no-repeat white;
	border-radius: 50vmax;
	color: forestgreen;
	height: auto;
	left: 50%;
	opacity: 0.85;
	padding: 1rem;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: max(70%, 15vw);

	button:active & {
		display: none;
	}
`;
