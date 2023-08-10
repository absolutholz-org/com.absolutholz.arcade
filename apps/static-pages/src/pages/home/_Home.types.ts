import type { GameType, IGame } from '@arcade/library-common/src/gameConfig';

export type IHome = {
	games: Record<GameType, IGame[]>;
};
