import styled from 'styled-components';

import { Headline200, SpacingSize } from '@arcade/library-components';

export const ScoreboardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
	justify-content: center;
	margin-top: ${SpacingSize.x150};
`;

export const ScoreboardPlayerName = styled(Headline200).attrs({ as: 'h3' })<{
	$color?: string;
}>`
	color: ${({ $color }) => $color};
	margin-bottom: ${SpacingSize.x050};
`;
