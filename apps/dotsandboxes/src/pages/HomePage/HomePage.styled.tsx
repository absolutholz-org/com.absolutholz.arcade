import styled from 'styled-components';

import { HeadlineSectionLevel1, SpacingSize } from '@arcade/library-components';

export const PlayersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
`;

export const Section = styled.div`
	padding-bottom: ${SpacingSize.x100};
	padding-top: ${SpacingSize.x100};
`;
