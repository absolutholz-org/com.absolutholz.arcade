import { createGlobalStyle } from 'styled-components';

// https://github.com/absolutholz/semantic-reboot

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
        
        @media (prefers-color-scheme: dark) {
            --accent: #007eff;
            --surface: #1a1a1a;
            --on-surface: #fff;
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

    input,
    select,
    textarea {
        background: none;
        color: inherit;
        font: inherit;
    }

    button {
        background: none;
        border: 0;
        border-radius: 0;
        color: inherit;
        font: inherit;
        margin: 0;
        padding: 0;
    }
`;
