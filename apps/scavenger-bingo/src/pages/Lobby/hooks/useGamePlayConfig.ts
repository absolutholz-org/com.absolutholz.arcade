import { DEFAULT_PARAMETERS, STORAGE_PREFIX } from "../../../App.constants";
import type { FreeSpacePosition, WinningCombination } from "../../../App.types";
import { useLocalStorage } from "@arcade/library-components/src/hooks/useLocalStorage";

type GamePlayConfig = {
    freeSpacePosition: FreeSpacePosition;
    size: number;
    winningCombinations: WinningCombination[];
    symbolIds: string[];
};

const STORAGE_KEY = `${STORAGE_PREFIX}_lastconfig`;

export function useGamePlayConfig (): {
    gamePlayConfig: GamePlayConfig;
    setGamePlayConfig: ({ freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GamePlayConfig>) => void;
} {
    const [gamePlayConfig, _setGamePlayConfig] = useLocalStorage<GamePlayConfig>(
		STORAGE_KEY,
		DEFAULT_PARAMETERS
	);

    function setGamePlayConfig ({ freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GamePlayConfig>) {
        const newFreeSpacePosition =  freeSpacePosition ?? gamePlayConfig.freeSpacePosition;
        const newSize =  size ?? gamePlayConfig.size;
        const newWinningCombinations =  winningCombinations ?? gamePlayConfig.winningCombinations;
        const newSymbolIds =  symbolIds ?? gamePlayConfig.symbolIds;

        _setGamePlayConfig((gamePlayConfig) => {
            const newConfig = { 
                ...gamePlayConfig, 
                freeSpacePosition: newFreeSpacePosition, 
                size: newSize, 
                winningCombinations: newWinningCombinations, 
                symbolIds: newSymbolIds,
            }
            return newConfig;
        });
    }

    return { gamePlayConfig, setGamePlayConfig };
}