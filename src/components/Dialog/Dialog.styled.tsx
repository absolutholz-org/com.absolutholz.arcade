import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {
      opacity: 0;
      transform: translateX(-3rem);
    }
  
    to {
      opacity: 1;
      transform: translateX(0);
    }
`;

export const Dialog = styled.dialog`
    background: var(--surface);
    border: 0;
    border-radius: 3px;
    color: var(--on-surface);
    max-width: min(500px, 100% - (var(--page-padding) * 2));
    min-width: min(250px, 100% - (var(--page-padding) * 2));

    &::backdrop {
        background: hsl(0, 0%, 0%, 0.9);
    }

    &[open] {
        animation: ${ appear } 150ms cubic-bezier(0, 1.8, 1, 1.8);
    }    
`;

export const Footer = styled.footer`
    margin-top: 1rem;
`;
