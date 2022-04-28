import { PlayerColor } from '../../enums';
import { IGameConfigurationState } from './GameConfigurationContext';

export const DEFAULT_STATE: IGameConfigurationState = {
	gameSize: { columnCount: 4, rowCount: 4 },
	players: [
		{
			uuid: `${Math.ceil(Math.random() * 10000000)}`,
			displayName: 'Player 1',
			color: PlayerColor.Red,
		},
		{
			uuid: `${Math.ceil(Math.random() * 10000000)}`,
			displayName: 'Player 2',
			color: PlayerColor.Blue,
		},
	],
};
