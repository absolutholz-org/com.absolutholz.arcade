import styled from 'styled-components';

import { Gameboard as GameboardComponent } from '../Gameboard';

export const Gameboard = styled(GameboardComponent)`
	margin: var(--offset) auto;
	max-width: 50rem;
`;

export const LayoutLandscape = styled.div``;

export const LayoutPortrait = styled.div``;

export const LayoutPortraitScoreboards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;
