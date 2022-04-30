import { PlayerColor } from '../../enums';
import { IGameConfigurationState } from './GameConfigurationContext';

export const DEFAULT_STATE: IGameConfigurationState = {
	gameSize: { columnCount: 4, rowCount: 4 },
	players: [
		{
			color: PlayerColor.Red,
			displayName: 'Player 1',
			gameBoxCount: 0,
			gameLineCount: 0,
			uuid: `${Math.ceil(Math.random() * 10000000)}`,
		},
		{
			color: PlayerColor.Blue,
			displayName: 'Player 2',
			gameBoxCount: 0,
			gameLineCount: 0,
			uuid: `${Math.ceil(Math.random() * 10000000)}`,
		},
	],
};
