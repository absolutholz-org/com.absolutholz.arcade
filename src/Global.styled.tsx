import { createGlobalStyle, css } from 'styled-components';

// https://github.com/absolutholz/semantic-reboot

const DarkColorSchemeCSS = css`
    --accent: #007eff;
    --surface: #1a1a1a;
    --on-surface: #fff;
`;

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    @viewport {
		width: device-width;
	}

    :root {
        --accent: #006ecd;
        --on-accent: #fff;
        --surface: #fffff8;
        --on-surface: #11111a;

        &[data-color-scheme="dark"] {
            ${ DarkColorSchemeCSS }
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                ${ DarkColorSchemeCSS }
            }
        }   
    }

    html {
        font: normal 1em / 1.42 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
        height: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        @if ($root-momentum-scrolling) {
            -webkit-overflow-scrolling: touch;
        }
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
        accent-color: var(--accent);
        background: var(--surface);
        color: var(--on-surface);
        margin: 0;
        min-height: 100%;
    }

    [tabindex="-1"]:focus {
        outline: none !important;
    }

    a {
        color: var(--accent);
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
`;
