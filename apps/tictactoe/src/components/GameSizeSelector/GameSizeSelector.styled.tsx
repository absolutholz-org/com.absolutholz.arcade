import styled from "styled-components";

import { Card, SpacingSize, TypoSize } from "@arcade/library-components";

export const ThemeGrid = styled.div`
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

export const ThemeName = styled.div`
	display: inline-grid;
	font-size: ${TypoSize.x150};
	gap: var(--gutter);
	grid-template-columns: auto auto;
`;
