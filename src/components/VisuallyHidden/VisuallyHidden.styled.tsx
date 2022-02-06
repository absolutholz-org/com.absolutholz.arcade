import styled, { css } from 'styled-components';

export const VisuallyHiddenStyles = css`
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
`;

export const VisuallyHidden = styled.div`
    ${ VisuallyHiddenStyles }
`;
