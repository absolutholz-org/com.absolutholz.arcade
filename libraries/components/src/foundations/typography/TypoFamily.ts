import { css } from 'styled-components';

export const TypoFamily = {
	Body: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
	Headline: 'GamePlayed, monospace, monospace',
} as const;

export function typoFamily(family: 'body' | 'headline'): string {
	switch (family) {
		case 'headline':
			return 'var(--typo-headline)';
		default:
			return 'var(--typo-body)';
	}
}

export function typoFamilyCss(family: 'body' | 'headline') {
	return css`
		font-family: ${typoFamily(family)};
	`;
}
