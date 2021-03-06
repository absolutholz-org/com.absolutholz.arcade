import styled from 'styled-components';

export const Gameboard = styled.div<{
	$columnCount: number;
	$rowCount: number;
}>`
	--dot-size: 2em;
	--half-dot-size: calc(var(--dot-size) / 2);
	--dot-size-outline: 0.25em;

	display: grid;
	grid: auto-flow / repeat(${({ $columnCount }) => $columnCount}, 1fr);
	margin: auto;
	max-width: ${({ $columnCount }) => $columnCount * 10}rem;
	padding: var(--half-dot-size);
	position: relative;
	z-index: 0;

	&::after {
		background-image: radial-gradient(
			circle at var(--half-dot-size) var(--half-dot-size),
			var(--on-surface)
				calc(var(--half-dot-size) - var(--dot-size-outline)),
			var(--surface) calc(var(--half-dot-size) - var(--dot-size-outline)),
			var(--surface) var(--half-dot-size),
			transparent var(--half-dot-size)
		);
		background-size: ${({ $columnCount, $rowCount }) => `
			calc((100% /  ${$columnCount}) - (var(--dot-size) / ${$columnCount})) 
			calc((100% / ${$rowCount}) - (var(--dot-size) / ${$rowCount}))
		`};
		content: '';
		display: block;
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		width: 100%;
	}
`;
