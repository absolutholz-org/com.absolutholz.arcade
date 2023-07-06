import type { Dispatch } from "react";
import type { GameSet } from "../../GameSet.types";

export type AddCustomPresetArgs = {
    name: string; 
    symbols: string[]
}

export type RemoveCustomPresetArgs = {
    id: string; 
}

export type IGameSetContext = GameSet & {
    setId: Dispatch<string>;
    addCustomPreset: ({ name, symbols }: AddCustomPresetArgs) => void;
};
