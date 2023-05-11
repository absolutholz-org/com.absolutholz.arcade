import styled from '@emotion/styled';

export const GameBoard = styled.div`
	border: 2px solid hsl(0 0% 50% / 0.2);
	border-radius: 0.5rem;
	display: grid;
	gap: 0.25rem;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	padding: 0.25rem;

	> *:nth-of-type(odd) {
		background-color: hsl(0 0% 50% / 0.2);
	}
`;

export const GameBoard_Field = styled.div`
	aspect-ratio: 1 / 1;
	border-radius: 0.25rem;
	padding: min(5%, var(--space-xs));
`;
