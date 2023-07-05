import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { useLocalStorage } from "@arcade/library-components/src/hooks/useLocalStorage";

import type { AddCustomPresetArgs, RemoveCustomPresetArgs, SetContext } from "./_SetContext.annotations";
import type { SetPreset, SetPresetCustom, SetSymbol } from "./_SetContext.types";
import { STORAGE_APP_PREFIX } from "../../App.constants";
import { nanoid } from "nanoid";

const STORAGE_KEY = `${STORAGE_APP_PREFIX}_customPresets`;

export const SetConfigContext = createContext<SetContext>({
	setSetId: () => null, 
	symbols: [],
	presets: [],
	customPresets: [],
	addCustomPreset: () => null,
	removeCustomPreset: () => null,
});

export function SetConfigProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [ setId, setSetId ] = useState<string>();
	const [ symbols, setSymbols ] = useState<SetSymbol[]>([]);
	const [ presets, setPresets ] = useState<SetPreset[]>([]);
	const [ customPresets, storeCustomPresets ] = useLocalStorage<SetPresetCustom[]>(
		`${STORAGE_KEY}_${setId}`,
		[]
	);

	async function loadConfig (id: string) {
		const { default: config } = await import(`../../configs/${id}/config.json`);
		const symbols: SetSymbol[] = config.symbols;
		const presets: SetPreset[] = config?.presets ?? [];
		setSymbols(symbols);
		setPresets(presets);
	} 

	useEffect(() => {
		if (setId) {
			loadConfig(setId);
		}
	}, [setId]);

	function addCustomPreset ({ name, symbols }: AddCustomPresetArgs): void | SetPresetCustom {
		if (!setId) return;

		const customPreset = {
			setId,
			id: nanoid(10),
			name,
			symbols,
		};

		storeCustomPresets((customPresets) => [...customPresets, customPreset]);

		return customPreset;
	}

	function removeCustomPreset ({ id }: RemoveCustomPresetArgs): void {
		storeCustomPresets((customPresets) => customPresets.filter((customPreset) => customPreset.id !== id));
	}

	return (
		<SetConfigContext.Provider value={{ setId, setSetId, symbols, presets, customPresets, addCustomPreset, removeCustomPreset }}>
			{children}
		</SetConfigContext.Provider>
	);
}

export function useSetConfig(): SetContext {
	const { setId, setSetId, symbols, presets, customPresets, addCustomPreset, removeCustomPreset } = useContext(SetConfigContext);

	// if (gameConfig === undefined) {
	// 	throw new Error('useGameState must be used within a GameProvider');
	// }

	return { setId, setSetId, symbols, presets, customPresets, addCustomPreset, removeCustomPreset };
}
