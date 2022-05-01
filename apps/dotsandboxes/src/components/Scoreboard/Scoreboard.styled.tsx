import styled from 'styled-components';

import { Headline200, SpacingSize } from '@arcade/library-components';

export const ScoreboardGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
`;

export const ScoreboardPlayerName = styled(Headline200).attrs({ as: 'h3' })`
	margin-bottom: ${SpacingSize.x050};
`;
