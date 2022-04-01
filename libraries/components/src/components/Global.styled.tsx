import { createGlobalStyle, css } from "styled-components";
import { SpacingSize } from "../enums";

// https://github.com/absolutholz/semantic-reboot

const DarkColorSchemeCSS = css`
	--accent: #007eff;
	--surface-hsl: 0, 0%, 10%;
	--on-surface-hsl: 0, 0%, 100%;
`;

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    /* 
    This kills the build render
    @viewport {
		width: device-width;
	} */

    :root {
        --accent: #006ecd;
        --on-accent: #fff;
        --surface-hsl: 60, 100%, 99%;
        --surface: hsl(var(--surface-hsl));
        --on-surface-hsl: 240, 21%, 8%;
		--on-surface: hsl(var(--on-surface-hsl));

        color-scheme: light dark;

        &[data-color-scheme="dark"] {
            ${DarkColorSchemeCSS}
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                ${DarkColorSchemeCSS}
            }
        }

        --gutter: ${SpacingSize.x050};
        --offset: ${SpacingSize.x100};

        @media (min-width: 600px) {
            --gutter: ${SpacingSize.x100};
            --offset: ${SpacingSize.x150};
        }

        @media (min-width: 900px) {
            --gutter: ${SpacingSize.x125};
            --offset: ${SpacingSize.x200};
        }
    }

    html {
        font: normal 1em / 1.5 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
        accent-color: var(--accent);
        background: var(--surface);
        color: var(--on-surface);
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
        color: var(--accent);
    }

    img {
        height: auto;
        max-width: 100%;

        [data-color-scheme="dark"] & {
            filter: brightness(.8) contrast(1.2);
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                filter: brightness(.8) contrast(1.2);
            }
        }
    }
`;
