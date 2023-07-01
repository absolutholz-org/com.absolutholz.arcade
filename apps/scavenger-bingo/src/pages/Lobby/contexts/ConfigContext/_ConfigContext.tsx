import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { DEFAULT_GAME_CONFIG, STORAGE_APP_PREFIX } from '../../../../App.constants';
import type { GameConfig, SymbolConfig, SymbolPreset } from '../../../../App.types';

const STORAGE_KEY = `${STORAGE_APP_PREFIX}_lastconfig`;

interface ConfigContext {
    symbols: SymbolConfig[];
    presets: SymbolPreset[];
    gameConfig?: GameConfig;
    setGameConfig: ({ freeSpacePosition, size, winningCombinations, symbolIds }: Partial<GameConfig>) => void;
};

export const ConfigContext = createContext<ConfigContext>({
    symbols: [],
    presets: [],
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
    const [ symbols, setSymbols ] = useState<SymbolConfig[]>([]);
    const [ presets, setPresets ] = useState<SymbolPreset[]>([]);

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

    async function loadConfig (id: string) {
		const { default: config } = await import(`../../../../configs/${id}/config.json`);
        const symbols: SymbolConfig[] = config.symbols;
        const presets: SymbolPreset[] = config.presets;
        storeGameConfig((gameConfig) => {
            const newConfig = { 
                ...gameConfig, 
                symbolIds: symbols.filter((symbol) => !symbol.variant).map((symbol) => symbol.id),
            }
            return newConfig;
        });
		setSymbols(symbols);
		setPresets(presets);
	} 

    useEffect(() => {
		loadConfig(gameConfig.gameConfigId);
	}, [gameConfig.gameConfigId]);


	return (
		<ConfigContext.Provider value={{ symbols, presets, gameConfig, setGameConfig }}>
			{children}
		</ConfigContext.Provider>
	);
}

interface ConfigContextMandatory extends ConfigContext {
    gameConfig: GameConfig;
}

export function useGameConfig(): ConfigContextMandatory {
	const { symbols, presets, gameConfig, setGameConfig } = useContext(ConfigContext);

	if (gameConfig === undefined) {
		throw new Error('useGameState must be used within a GameProvider');
	}

	return { symbols, presets, gameConfig, setGameConfig };
}
