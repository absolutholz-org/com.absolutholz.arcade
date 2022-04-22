import styled from 'styled-components';

import { Card, SpacingSize, TypoSize } from '@arcade/library-components';

export const GameTheme = styled(Card)``;

export const Title = styled.div``;

export const IconWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: ${SpacingSize.x050};
`;

export const ThemeName = styled.div`
	display: inline-grid;
	font-size: ${TypoSize.x150};
	gap: var(--gutter);
	grid-template-columns: auto auto;
`;

export const RangeInput = styled.input.attrs({
	type: 'range',
})`
	display: block;
	width: 100%;
`;
