import { ReactNode, createContext, useContext } from 'react';

import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { DEFAULT_GAME_CONFIG, STORAGE_APP_PREFIX } from '../../../../App.constants';
import { GameConfig } from '../../../../App.types';

const STORAGE_KEY = `${STORAGE_APP_PREFIX}_lastconfig`;

export const ConfigContext = createContext<{
    gameConfig?: GameConfig;
    setGameConfig: ({ freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GameConfig>) => void;
}>({
	gameConfig: undefined,
	setGameConfig: () => null,
});

export function ConfigProvider({
	children,
}: {
	children: ReactNode;
}) {
    const [ gameConfig, storeGameConfig ] = useLocalStorage<GameConfig>(
		STORAGE_KEY,
		DEFAULT_GAME_CONFIG
	);

    function setGameConfig ({ gameConfigId, freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GameConfig>) {
        const newGameConfigId =  gameConfigId ?? gameConfig.gameConfigId;
        const newFreeSpacePosition =  freeSpacePosition ?? gameConfig.freeSpacePosition;
        const newSize =  size ?? gameConfig.size;
        const newWinningCombinations =  winningCombinations ?? gameConfig.winningCombinations;
        const newSymbolIds =  symbolIds ?? gameConfig.symbolIds;

        storeGameConfig((gameConfig) => {
            const newConfig = { 
                ...gameConfig, 
                gameConfigId: newGameConfigId, 
                freeSpacePosition: newFreeSpacePosition, 
                size: newSize, 
                winningCombinations: newWinningCombinations, 
                symbolIds: newSymbolIds,
            }
            return newConfig;
        });
    }

	return (
		<ConfigContext.Provider value={{ gameConfig, setGameConfig }}>
			{children}
		</ConfigContext.Provider>
	);
}

export function useGameConfig(): {
    gameConfig: GameConfig;
    setGameConfig: ({ gameConfigId, freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GameConfig>) => void;
} {
	const { gameConfig, setGameConfig } = useContext(ConfigContext);

	if (gameConfig === undefined) {
		throw new Error('useGameState must be used within a GameProvider');
	}

	return { gameConfig, setGameConfig };
}
