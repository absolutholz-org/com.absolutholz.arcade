import { ReactNode } from 'react';

import { PlayerColor } from '@arcade/library-common';

export interface IColorSelectorProps {
	onSelect: (color: PlayerColor) => void;

	selectedColor: PlayerColor;

	slotLegend: ReactNode;
}

export interface IColorOptionProps {
	color: PlayerColor;

	disabled: boolean;

	selectedColor: PlayerColor;

	onSelect: (color: PlayerColor) => void;
}
