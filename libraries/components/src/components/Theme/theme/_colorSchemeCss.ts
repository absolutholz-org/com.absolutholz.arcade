import { css, type SerializedStyles } from "@emotion/react";

export function colorSchemeCss({lightCssVars, darkCssVars}: {lightCssVars?: SerializedStyles, darkCssVars?: SerializedStyles}): SerializedStyles {
	return css`
		${lightCssVars}

		${darkCssVars && css`
			&[data-color-scheme='dark'] {
				${darkCssVars}
			}
			
			@media (prefers-color-scheme: dark) {
				&:not([data-color-scheme='light']) {
					${darkCssVars}
				}
			}
		`}
	`;
}
