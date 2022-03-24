import styled from 'styled-components';

import { TypoSize } from '@arcade/components';

export const PlayerConfig = styled.div`
	text-align: center;
`;

export const IconWrapper = styled.div`
	aspect-ratio: 1 / 1;
	display: flex;
`;

export const PlayerName = styled.div`
	display: inline-grid;
	font-size: ${TypoSize.x150};
	gap: var(--gutter);
	grid-template-columns: auto auto;
`;
