import { ReactNode, createContext, useContext, useEffect } from 'react';

import { useLocalStorage } from '@arcade/library-components/src/hooks/useLocalStorage';

import { DEFAULT_GAME_CONFIG, STORAGE_APP_PREFIX } from '../../App.constants';
import type { GameConfig } from '../../GameConfig.types';
import type { IGameConfigContext } from './_GameConfigContext.annotations';
import { useGameSet } from '../GameSetContext';

const STORAGE_KEY = `${STORAGE_APP_PREFIX}_lastconfig`;

export const GameConfigContext = createContext<IGameConfigContext>({
    ...DEFAULT_GAME_CONFIG,
    setGameConfig: () => null,
});

export function GameConfigProvider({
	children,
}: {
	children: ReactNode;
}) {
    const [ gameConfig, storeGameConfig ] = useLocalStorage<GameConfig>(
		STORAGE_KEY,
		DEFAULT_GAME_CONFIG
	);
    const { setId: setGameSetId, symbols } = useGameSet();
    
    function setGameConfig ({ gameSetId, freeSpacePosition, winningCombinations, symbolIds }: Partial<GameConfig>) {
        if (gameSetId) {
            setGameSetId(gameSetId);
        }

        storeGameConfig((gameConfig) => ({
            ...gameConfig, 
            gameSetId: gameSetId ?? gameConfig.gameSetId, 
            freeSpacePosition: freeSpacePosition ?? gameConfig.freeSpacePosition, 
            winningCombinations: winningCombinations ?? gameConfig.winningCombinations, 
            symbolIds: symbolIds ?? gameConfig.symbolIds,
        }));
    }
    
    useEffect(() => {
        setGameSetId(gameConfig.gameSetId);
    }, []);
    
	return (
		<GameConfigContext.Provider value={{ 
            gameSetId: gameConfig.gameSetId,
            freeSpacePosition: gameConfig.freeSpacePosition, 
            winningCombinations: gameConfig.winningCombinations, 
            symbolIds: gameConfig.symbolIds, 
            setGameConfig,
        }}>
			{children}
		</GameConfigContext.Provider>
	);
}

export function useGameConfig(): IGameConfigContext {
	const { gameSetId, freeSpacePosition, winningCombinations, symbolIds, setGameConfig } = useContext(GameConfigContext);

	// if (gameConfig === undefined) {
	// 	throw new Error('useGameState must be used within a GameProvider');
	// }

	return { gameSetId, freeSpacePosition, winningCombinations, symbolIds, setGameConfig };
}
