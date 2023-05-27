import styled from '@emotion/styled';

import { FoundSymbol } from '../FoundSymbol';

export const GameCardSymbol = styled.button`
	align-items: center;
	aspect-ratio: 1 / 1;
	border-radius: 0.25rem;
	display: flex;
	justify-content: center;
	padding: min(5%, var(--space-xs));
	position: relative;
	width: 100%;
`;

export const GameCardSymbol_Symbol = styled.img`
	max-height: 100%;
	max-width: 100%;
`;

export const GameCardSymbol_FoundSymbol = styled(FoundSymbol)`
	height: auto;
	inset: 0;
	opacity: 0.85;
	margin: auto;
	padding: 1rem;
	pointer-events: none;
	position: absolute;
	width: max(70%, 15vw);
`;
