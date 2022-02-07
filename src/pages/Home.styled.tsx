import styled from 'styled-components';

import { Icon } from '../components/Icon';
import { IconText } from '../components/IconText';

export const Section = styled.section`
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
`;

export const SectionHeadline = styled.div`
    font-size: 1.25rem;
    font-weight: 400;
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

export const PageHeadline = styled.div`
	font-size: 4rem;
	font-weight: 100;
	line-height: 1;
	`;

export const PageHeadlineSub = styled.div`
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1;
`;

export const PageHeadlineIcon = styled(Icon)`
	font-size: 3.5rem;
`;

export const SectionHeader = styled(IconText)`
	margin: 0;
    padding-bottom: 1.5rem;
    padding-top: 6rem;
`;
