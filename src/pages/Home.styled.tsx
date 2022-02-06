import styled from 'styled-components';

export const Section = styled.section`
    padding: 1.5rem;
`;

export const SectionHeadline = styled.div`
    font-size: 1.5rem;
    font-weight: 100;
    margin: 0 0 1rem 0;
`;

export const CardGrid = styled.div`
    --tsr-list-max-columns: 6;
    --tsr-list-tsr-width: 300px;

    display: grid; 
    gap: 2rem var(--gutter);
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(clamp(100% / var(--tsr-list-max-columns) - var(--gutter), var(--tsr-list-tsr-width), 100%), 1fr));
`;
