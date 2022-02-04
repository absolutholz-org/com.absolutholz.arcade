import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --page-padding: 1rem;
    
    @media (min-width: 48rem) {
        --page-padding: 1.5rem;
    }
}
`;

export const PageLayoutContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 100rem;
    padding-left: var(--page-padding);
    padding-right: var(--page-padding);
`;
