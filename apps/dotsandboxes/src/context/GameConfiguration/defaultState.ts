import { IGameConfigurationState } from './GameConfigurationContext';

export const DEFAULT_STATE: IGameConfigurationState = {
	gameSize: { columnCount: 4, rowCount: 4 },
	players: [
		{
			uuid: 'player-1',
			displayName: 'Player 1',
			color: '#ff0000',
		},
		{
			uuid: 'player-2',
			displayName: 'Player 2',
			color: '#0000ff',
		},
	],
};
