import { GameSetPresetCustom } from "../../GameSet.types";

export type AddCustomPresetArgs = {
    setId: string;
    name: string; 
    symbols: string[];
}

export type CustomPresetsContext = {
    customPresets: GameSetPresetCustom[];
    addCustomPreset: ({ name, symbols }: AddCustomPresetArgs) => void;
	removeCustomPreset: (id: string) => void;
};
