import styled from 'styled-components';

import SvgCheck from 'mdi-react/CheckBoldIcon';

import {
	CardBillboard,
	Elevation,
	Icon,
	IconSize,
	SpacingSize,
	TypoSize,
} from '@arcade/library-components';
import { PlayerColor } from '@arcade/library-common';

export const ColorSelector = styled.fieldset``;

export const CardGrid = styled.div`
	display: grid;
	gap: ${SpacingSize.x200} var(--gutter);
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(auto-fill, minmax(min(50%, 15rem), 1fr));
`;

export const CardBackground = styled.div<{ $color: PlayerColor }>`
	background-color: var(--player-color-${({ $color }) => $color});
	height: 100%;
	left: 0;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: -2;
`;

export const Card = styled(CardBillboard)`
	input:checked + & {
		${Elevation(8)}
	}

	input:disabled + & {
		${Elevation(0)}
		filter: brightness(0.5) contrast(1.2) opacity(0.5);
	}
`;

export const CardTitle = styled.div``;

export const CheckedFlag = styled(Icon).attrs({
	icon: SvgCheck,
	size: IconSize.x400,
})`
	border: 6px solid;
	border-radius: 9vmax;
	color: var(--surface);
	display: none;
	left: -0.5rem;
	padding: 1%;
	position: absolute;
	top: -0.5rem;
	z-index: -1;

	input:checked + ${Card} & {
		display: block;
	}
`;

export const Legend = styled.legend`
	font-size: ${TypoSize.x100};
	margin-bottom: ${SpacingSize.x050};
`;
