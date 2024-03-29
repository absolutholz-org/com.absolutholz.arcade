import { css, Global } from '@emotion/react';

import { pageGridCss } from '../components/PageGrid';
import { spaceCss } from '../foundations/spacing/spaceCSS';
import { typographyCss } from '../components/Typography';
import { typography } from '../components/Typography/_Typography';
import {
	colorSchemeCss,
	colorSchemesCssVars,
	themeCss,
} from '../components/Theme/theme';

import theme from '../components/Theme/themes/default.theme.json';

const lightCssVars = colorSchemesCssVars(theme.colors[0].light);
const darkCssVars = colorSchemesCssVars(theme.colors[0].dark);

/**
 * @link https://www.joshwcomeau.com/css/custom-css-reset/
 */
const _baseStyles = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	* {
		border: none;
	}

	/* @viewport {
		width: device-width;
	} */

	:root {
		/* https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-handling-user-agent-styles */
		color-scheme: light dark;

		/* CSS vars */
		${colorSchemeCss({ lightCssVars, darkCssVars })}
		${typographyCss}
		${spaceCss}
		${pageGridCss}

		/* Styles */
		${themeCss}
	}

	html {
		height: 100%;
		-webkit-text-size-adjust: none; /* for iOS Safari */
		text-size-adjust: none; /* for other mobile browsers */

		@media (prefers-reduced-motion: no-preference) {
			scroll-behavior: smooth;
		}
	}

	body {
		${typography()};
		margin: 0;
		min-height: 100%;
	}

	img {
		display: block;
		max-width: 100%;

		/* https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/ */
		[data-color-scheme='dark'] & {
			filter: brightness(0.8) contrast(1.2);
		}

		@media (prefers-color-scheme: dark) {
			&:not([data-color-scheme='light']) {
				filter: brightness(0.8) contrast(1.2);
			}
		}
	}

	menu,
	ol,
	ul {
		list-style-position: inside;
	}

	a {
		text-underline-position: under;
	}

	label,
	button,
	select,
	summary,
	[type='radio'],
	[type='submit'],
	[type='checkbox'] {
		cursor: pointer;

		&:disabled {
			cursor: not-allowed;
		}
	}

	button {
		appearance: none;
		background: none;
		border: none;
		border-radius: 0;
		color: inherit;
		cursor: pointer;
		font: inherit;
		margin: 0;
		overflow: visible;
		padding: 0;
		width: auto;
	}

	label {
		display: inline-block;
	}

	fieldset {
		border: 0;
		margin: 0;
		min-width: 0;
		padding: 0;
	}

	legend {
		display: block;
		padding: 0;
		width: 100%;
	}

	dialog {
		background: none;
		border: 0;

		&::backdrop {
			background: hsl(0, 0%, 0%, 0.7);
			backdrop-filter: blur(5px);
		}
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5 {
		max-width: 70ch;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		margin-bottom: 0.5em;
		margin-top: 1.5em;
	}

	h2 {
		${typography('xxl')};
	}
	íÍ h3 {
		${typography('xl')};
	}

	h4 {
		${typography('l')};
		font-weight: bold;
	}

	h5 {
		${typography('m')};
		font-weight: bold;
	}

	a {
		color: var(--color-accent);
	}
`;

export function BaseStyles(): JSX.Element {
	return <Global styles={_baseStyles} />;
}
