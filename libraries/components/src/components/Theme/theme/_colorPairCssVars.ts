import { css, type SerializedStyles } from "@emotion/react";

import type { ColorPair } from "../color/_color.types";

export function colorPairCssVars (name: string, obj: ColorPair): SerializedStyles {
	return css`
		${obj.surface.map(
			(surface, index: number) => css`
			    --color-${name}${index === 0 ? '' : `-${index}`}: ${surface};
            `
        )}
		${obj.onSurface.map(
			(onSurface, index: number) => css`
			    --color-${name}-on${index === 0 ? '' : `-${index}`}: ${onSurface};
            `
        )}
    `;
}