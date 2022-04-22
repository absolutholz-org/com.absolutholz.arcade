import styled from 'styled-components';

export const Gameboard = styled.div<{ $columnCount: number }>`
	background: var(--on-surface);
	display: grid;
	gap: 2px;
	grid-template-columns: repeat(${({ $columnCount }) => $columnCount}, 1fr);
	grid-template-rows: repeat(${({ $columnCount }) => $columnCount}, 1fr);
`;

export const Buttons = styled.div`
	display: flex;
	gap: var(--gutter);
	justify-content: center;
`;
