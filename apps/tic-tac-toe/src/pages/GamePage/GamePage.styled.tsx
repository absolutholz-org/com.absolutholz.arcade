import styled from 'styled-components';

import { PageLayoutContainer, SpacingSize } from '@arcade/components';

import { Gameboard as GameboardComponent } from '../../components/Gameboard';
import { Scoreboard as ScoreboardComponent } from '../../components/Scoreboard';
import { TurnDisplay as TurnDisplayComponent } from '../../components/TurnDisplay';

export const MEDIA_QUERY = '(min-width: 50rem)';

export const GamePage = styled(PageLayoutContainer)`
	display: flex;
	flex-direction: column;
	gap: ${SpacingSize.x100};
	height: 100vh;

	@media (orientation: landscape) {
		flex-direction: row;
	}
`;

export const TurnDisplay = styled(TurnDisplayComponent)`
	text-align: center;
`;

export const Gameboard = styled(GameboardComponent)``;

export const Scoreboard = styled(ScoreboardComponent)``;

export const GameboardContainer = styled.div``;

export const GameWrapper = styled.div`
	display: grid;
	gap: calc(var(--gutter) * 2);
	grid-template-rows: auto 1fr;
	min-height: 100%;
	padding: var(--offset);

	@media ${MEDIA_QUERY} {
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		justify-content: center;
		min-height: 0;
	}
`;
export const GameboardColumn = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
`;
export const GameboardWrapper = styled.div`
	--max-width-base: 32rem;
	--max-width-flex: calc(100vh - 15rem);
	max-width: min(var(--max-width-base), var(--max-width-flex));
	width: 100%;

	@media ${MEDIA_QUERY} {
		--max-width-flex: calc(100vh - (var(--offset) * 2));
		width: 100vw;
	}
`;
export const ScoreboardColumn = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
`;
export const ScoreboardHeadWrapper = styled.div``;
export const ScoreboardBodyWrapper = styled.div``;
export const ScoreboardFootWrapper = styled.div``;
