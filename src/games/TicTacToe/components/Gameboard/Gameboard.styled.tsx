import styled from 'styled-components';

export const Gameboard = styled.div`
	background: var(--on-surface);
	display: grid;
	gap: 2px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
`;

export const Buttons = styled.div`
	display: flex;
	gap: var(--gutter);
	justify-content: center;
`;
