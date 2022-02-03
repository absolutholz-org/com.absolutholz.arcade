import styled from "styled-components";

export const Gameboard = styled.div`
    background: var(--on-surface);
    display: grid;
    gap: 2px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;
