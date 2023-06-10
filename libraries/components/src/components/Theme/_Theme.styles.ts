import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { ThemeColor, ThemeScheme } from './_Theme.types';

import themeConfig from './themeConfig.json'; // TODO: needs to be dynamic ... themeprovider?

function createCssVars(name: string, obj: ThemeColor): SerializedStyles {
	// need to declare and use it this way or else TypeScript complains about a missing colon after the $ in the property name and I can't ignore it.
	const colorCssProp = `--color-${name}: ${obj.surface};`;
	return css`
		${colorCssProp}
		${obj.onSurface.map(
			(onSurface, index: number) => css`
			--color-${name}-on${index === 0 ? '' : `-${index}`}: ${onSurface};
		`
		)}
	`;
}

function theme(themeSet: Record<'light' | 'dark', ThemeScheme>): {
	light: SerializedStyles;
	dark: SerializedStyles;
} {
	return {
		light: css`
			${createCssVars('surface', themeSet.light)}
			${themeSet?.light?.accent?.map((surface, index: number) =>
				createCssVars(
					`accent${index === 0 ? '' : `-${index}`}`,
					surface
				)
			)}
			${themeSet?.light?.error?.map((surface, index: number) =>
				createCssVars(`error${index === 0 ? '' : `-${index}`}`, surface)
			)}
		`,
		dark: css`
			${createCssVars('surface', themeSet?.dark)}
			${themeSet?.dark?.accent?.map((surface, index: number) =>
				createCssVars(
					`accent${index === 0 ? '' : `-${index}`}`,
					surface
				)
			)}
					${themeSet?.dark?.error?.map((surface, index: number) =>
				createCssVars(`error${index === 0 ? '' : `-${index}`}`, surface)
			)}
		`,
	};
}

export function themeCss(themeSetId = 'default'): SerializedStyles {
	const themeSet = themeConfig.themes.find(({ id }) => id === themeSetId);
	const { light, dark } = theme(themeSet);

	return css`
		${light}

		&[data-color-scheme='dark'] {
			${dark}
		}

		@media (prefers-color-scheme: dark) {
			&:not([data-color-scheme='light']) {
				${dark}
			}
		}

		accent-color: var(--color-surface-on);
		background-color: var(--color-surface);
		color: var(--color-surface-on);
	`;
}
