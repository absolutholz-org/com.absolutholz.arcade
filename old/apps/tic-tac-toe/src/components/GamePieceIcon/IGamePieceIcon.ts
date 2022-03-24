import { IconSize } from '@arcade/components';

import { GameTheme, TicTacToePiece } from '../../enums';

export interface IGamePieceIconProps {
	iconSize?: IconSize;
	piece: TicTacToePiece;
	theme?: GameTheme;
}
