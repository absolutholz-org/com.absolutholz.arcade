import type { Dispatch } from "react";
import type { SetPreset, SetPresetCustom, SetSymbol } from "./_SetContext.types";

export type AddCustomPresetArgs = {
    name: string; 
    symbols: string[]
}

export type RemoveCustomPresetArgs = {
    id: string; 
}

export type SetContext = {
    setId?: string;
    setSetId: Dispatch<string>;
    symbols: SetSymbol[];
    presets: SetPreset[];
    customPresets: SetPresetCustom[];
    addCustomPreset: ({ name, symbols }: AddCustomPresetArgs) => void;
	removeCustomPreset: ({ id }: RemoveCustomPresetArgs) => void;
};
