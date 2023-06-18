import { css } from "@emotion/react";

export const TypoFamily = {
	Body: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
	Brand: 'GamePlayed, monospace, monospace',
} as const;

type TypoFamily = 'body' | 'brand' | 'system';

export function typoFamily(family: TypoFamily): string {
	switch (family) {
		case 'brand':
			return 'var(--typo-brand)';
		default:
			return 'var(--typo-body)';
	}
}

export function typoFamilyCss(family: TypoFamily) {
	return css`
		font-family: ${typoFamily(family)};
	`;
}
