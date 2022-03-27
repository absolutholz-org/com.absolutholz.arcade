import { createGlobalStyle, css } from "styled-components";

const DarkColorSchemeCSS = css`
	--accent: #007eff;
	--surface-hsl: 0, 0%, 10%;
	--on-surface-hsl: 0, 0%, 100%;
`;

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }

    :root {
        --accent: #006ecd;
        --on-accent: #fff;
        --surface-hsl: 60, 100%, 99%;
        --surface: hsl(var(--surface-hsl));
        --on-surface-hsl: 240, 21%, 8%;
		--on-surface: hsl(var(--on-surface-hsl));

        &[data-color-scheme="dark"] {
            ${DarkColorSchemeCSS}
        }

        @media (prefers-color-scheme: dark) {
            &:not([data-color-scheme="light"]) {
                ${DarkColorSchemeCSS}
            }
        }
    }

    html {
        font: normal 1em / 1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif;
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
        font-size: 1.125em;
        margin: 0;
        height: 100%;
    }
`;
