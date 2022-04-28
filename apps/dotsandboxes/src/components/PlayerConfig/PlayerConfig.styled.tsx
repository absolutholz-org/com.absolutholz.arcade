import styled from 'styled-components';

import { SpacingSize, TypoSize } from '@arcade/library-components';
import { PlayerColor } from '../../enums';

export const PlayersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--gutter);
`;

export const PlayerConfig = styled.div``;

export const Name = styled.div`
	font-size: ${TypoSize.x150};
`;

export const Color = styled.div<{ $color: PlayerColor }>`
	background-color: ${({ $color }) => $color};
	color: black;
	font-size: ${TypoSize.x1125};
	margin-top: ${SpacingSize.x050};
	padding: 0.125em 0.5em;
	text-transform: capitalize;
`;

export const Actions = styled.div`
	display: flex;
	gap: ${SpacingSize.x100};
	margin-top: ${SpacingSize.x050};
`;
