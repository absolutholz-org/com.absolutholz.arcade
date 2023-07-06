import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";

import type { AddCustomPresetArgs, IGameSetContext } from "./_GameSetContext.annotations";
import { useCustomPresets } from "../CustomPresetsContext";
import type { GameSetPreset, GameSetPresetCustom, GameSetSymbol } from "../../GameSet.types";

export const GameSetContext = createContext<IGameSetContext>({
	setId: () => null, 
	symbols: [],
	presets: [],
	customPresets: [],
	addCustomPreset: () => null,
});

export function GameSetProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [ id, _setId ] = useState<string>();
	const [ symbols, setSymbols ] = useState<GameSetSymbol[]>([]);
	const [ presets, setPresets ] = useState<GameSetPreset[]>([]);
	const { customPresets, addCustomPreset: _addCustomPreset } = useCustomPresets();

	useEffect(() => {
		async function loadConfig (id: string) {
			const { default: config } = await import(`../../configs/${id}/config.json`);
			const symbols: GameSetSymbol[] = config.symbols;
			const presets: GameSetPreset[] = config?.presets ?? [];
			setSymbols(symbols);
			setPresets(presets);
		} 

		if (id) {
			loadConfig(id);
		}
	}, [id]);

	function setId (newId:string): void {
		if (newId === id) return;
		
		setSymbols([]);
		setPresets([]);
		_setId(newId);
	}

	function addCustomPreset ({ name, symbols }: AddCustomPresetArgs): void | GameSetPresetCustom {
		if (!id) return;

		const customPreset = {
			id: nanoid(10),
			setId: id,
			name,
			symbols,
		};

		_addCustomPreset(customPreset);

		return customPreset;
	}

	return (
		<GameSetContext.Provider value={{ id, setId, symbols, presets, customPresets, addCustomPreset }}>
			{children}
		</GameSetContext.Provider>
	);
}

export function useGameSet(): IGameSetContext {
	const { id, setId, symbols, presets, customPresets, addCustomPreset } = useContext(GameSetContext);

	// if (gameConfig === undefined) {
	// 	throw new Error('useGameState must be used within a GameProvider');
	// }

	return { id, setId, symbols, presets, customPresets, addCustomPreset };
}
