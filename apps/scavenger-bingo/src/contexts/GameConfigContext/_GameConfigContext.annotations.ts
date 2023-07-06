import type { GameConfig } from "../../GameConfig.types";

export type IGameConfigContext = GameConfig & {
    setGameConfig: ({ freeSpacePosition, winningCombinations, symbolIds }: Partial<GameConfig>) => void;
};
