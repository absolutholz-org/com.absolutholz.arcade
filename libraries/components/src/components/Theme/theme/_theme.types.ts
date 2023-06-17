import { ColorSet } from "../color/_color.types";

export type Theme = {
    colors: { id: string; } & ColorSet[];
};
