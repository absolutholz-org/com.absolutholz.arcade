import { ReactNode, createContext, useContext } from "react";

import { useLocalStorage } from "@arcade/library-components/src/hooks/useLocalStorage";

import type { AddCustomPresetArgs, CustomPresetsContext } from "./_CustomPresetsContext.annotations";
import { STORAGE_APP_PREFIX } from "../../App.constants";
import { nanoid } from "nanoid";
import type { GameSetPresetCustom } from "../../GameSet.types";

const STORAGE_KEY = `${STORAGE_APP_PREFIX}_customPresets`;

const CustomPresetsContext = createContext<CustomPresetsContext>({
	customPresets: [],
	addCustomPreset: () => null,
	removeCustomPreset: () => null,
});

export function CustomPresetsProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [ customPresets, storeCustomPresets ] = useLocalStorage<GameSetPresetCustom[]>(
		`${STORAGE_KEY}`,
		[]
	);

	function addCustomPreset ({ setId, name, symbols }: AddCustomPresetArgs): void | GameSetPresetCustom {
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

	function removeCustomPreset (id: string): void {
		storeCustomPresets((customPresets) => customPresets.filter((customPreset) => customPreset.id !== id));
	}

	return (
		<CustomPresetsContext.Provider value={{ customPresets, addCustomPreset, removeCustomPreset }}>
			{children}
		</CustomPresetsContext.Provider>
	);
}

export function useCustomPresets(): CustomPresetsContext {
	const { customPresets, addCustomPreset, removeCustomPreset } = useContext(CustomPresetsContext);

	// if (gameConfig === undefined) {
	// 	throw new Error('useGameState must be used within a GameProvider');
	// }

	return { customPresets, addCustomPreset, removeCustomPreset };
}
