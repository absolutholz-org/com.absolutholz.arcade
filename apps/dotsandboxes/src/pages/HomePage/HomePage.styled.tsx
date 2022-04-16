import styled from 'styled-components';

import { HeadlineSectionLevel1, SpacingSize } from '@arcade/library-components';

export const PlayersContainer = styled.div`
	display: grid;
	gap: var(--gutter);
	grid-template-columns: 1fr auto 1fr;
`;

export const Section = styled.div`
	padding-bottom: ${SpacingSize.x100};
	padding-top: ${SpacingSize.x100};
`;
