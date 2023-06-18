import { type SerializedStyles, css } from "@emotion/react";

import type { ColorScheme } from "../color/_color.types";
import { colorPairCssVars } from "./_colorPairCssVars";

export function colorSchemesCssVars (colorScheme: ColorScheme): SerializedStyles {
    const { surface, onSurface, ...colorSchemeRest } = colorScheme;

    const basePairs = colorPairCssVars('surface', { surface, onSurface });
    
    const schemePairs = Object.entries(colorSchemeRest).map(([name, colorPairs]) => {
        return colorPairs.map((colorPair) => {
            return colorPairCssVars(name, colorPair)
        });
    });

    return css`
        ${basePairs}
        ${schemePairs}
    `;
}
