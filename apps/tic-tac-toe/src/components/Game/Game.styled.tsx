import styled from 'styled-components';

import { Gameboard as GameboardComponent } from '../Gameboard';

export const Gameboard = styled(GameboardComponent)`
	margin: auto;
	max-width: 50rem;
`;

export const LayoutLandscape = styled.div``;

export const LayoutPortrait = styled.div`
	display: grid;
	gap: var(--gutter);
	grid-template-rows: 1fr auto;

	@media (orientation: landscape) {
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
	}
`;

export const LayoutPortraitScoreboards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
