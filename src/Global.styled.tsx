import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
        box-sizing: border-box;
    }

    :root {
        --accent: #006ecd;
        --surface: #fffff7;
        --on-surface: #111;
        
        @media (prefers-color-scheme: dark) {
            --accent: #007eff;
            --surface: #1a1a1a;
            --on-surface: #fff;
        }   
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;

        accent-color: var(--accent);
        background: var(--surface);
        color: var(--on-surface);
    }

    a {
        color: var(--accent);
    }

    input,
    select,
    textarea {
        background: none;
        color: inherit;
        font: inherit;
    }

    button {
        all: unset;
    }
`;
