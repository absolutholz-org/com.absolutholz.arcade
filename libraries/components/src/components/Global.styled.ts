import { createGlobalStyle, css } from 'styled-components';
import { TypoFamily } from '../foundations/typography/TypoFamily';
import { LightColorSchemeCSS } from '../foundations/colors/SchemeLight';
import { DarkColorSchemeCSS } from '../foundations/colors/SchemeDark';
import { color } from '../foundations/colors/color';
import { space } from '../foundations/spacing/space';

// https://github.com/absolutholz/semantic-reboot

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GamePlayed';
        src: url('https://arcade.absolutholz.de/arcade-assets/fonts/game-played/GamePlayed.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    /* 
    This kills the build render
    @viewport {
		width: device-width;
	} */

    :root {
        ${LightColorSchemeCSS}

        /* https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-handling-user-agent-styles */
        color-scheme: light dark;

        &[data-color-scheme="dark"] {
            ${DarkColorSchemeCSS}
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                ${DarkColorSchemeCSS}
            }
        }

        --gutter: ${space(50)};
        --offset: ${space(100)};
        --typo-body: ${TypoFamily.Body};
        --typo-headline: ${TypoFamily.Headline};

        @media (min-width: 600px) {
            --gutter: ${space(100)};
            --offset: ${space(150)};
        }

        @media (min-width: 900px) {
            --gutter: ${space(125)};
            --offset: ${space(200)};
        }
    }

    html {
        font: normal 1em / 1.5 ${TypoFamily.Body};
        height: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
//         @if ($root-momentum-scrolling) {
            -webkit-overflow-scrolling: touch;
//         }
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        // THEME
        --role-surface: var(--theme-base);
        --role-primary: var(--theme-base-primary);
        --role-secondary: var(--theme-base-secondary);
        --role-tertiary: var(--theme-base-tertiary);
        --role-accent: var(--theme-base-accent);
        --role-error: var(--theme-base-error);

        background: ${color('surface')};
        color: ${color('primary')};

        accent-color: hsl(var(--theme-base-accent));
        caret-color: hsl(var(--theme-base-accent));
        font-size: 1.125em;
        margin: 0;
        height: 100%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: inherit;
    }

    [tabindex="-1"]:focus {
        outline: none !important;
    }

    // ## RESET ##########
    button,
    input,
    optgroup,
    select,
    textarea {
        background: none;
        color: inherit;
        font: inherit;
        margin: 0;
    }

    input,
    select,
    textarea {
    }

    button {
        border: 0;
        border-radius: 0;
        margin: 0;
        padding: 0;
    }

    label {
        display: inline-block;
    }

    legend {
        display: block;
        padding: 0;
        width: 100%;
    }

    fieldset {
        border: 0;
        margin: 0;
        min-width: 0;
        padding: 0;
    }

    a {
        color: ${color('accent')};
    }

    img {
        height: auto;
        max-width: 100%;

        /* https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/ */
        [data-color-scheme="dark"] & {
            filter: brightness(0.8) contrast(1.2);
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                filter: brightness(0.8) contrast(1.2);
            }
        }
    }

    dialog {
        background: none;
        border: 0;
        margin: 0;
        max-height: none;
        max-width: none;

        &::backdrop {
            background: hsl(0, 0%, 0%, 0.7);
            backdrop-filter: blur(5px);
        }
    }
`;
