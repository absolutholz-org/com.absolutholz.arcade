import styled from 'styled-components';

import { Card, SpacingSize, TypoSize } from '@arcade/components';

export const GameThemeSelector = styled.div`
	display: grid;
	gap: var(--gutter);
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(auto-fill, minmax(min(10rem, 100%), 1fr));
`;

export const GameTheme = styled(Card)``;

export const Flag = styled.div``;

export const Title = styled.div``;

export const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${SpacingSize.x050};
`;
