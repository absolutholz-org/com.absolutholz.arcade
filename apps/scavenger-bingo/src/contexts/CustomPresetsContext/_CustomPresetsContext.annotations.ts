import { SetPresetCustom } from "../GameSetContext/_SetContext.types";

export type AddCustomPresetArgs = {
    setId: string;
    name: string; 
    symbols: string[];
}

export type CustomPresetsContext = {
    customPresets: SetPresetCustom[];
    addCustomPreset: ({ name, symbols }: AddCustomPresetArgs) => void;
	removeCustomPreset: (id: string) => void;
};
