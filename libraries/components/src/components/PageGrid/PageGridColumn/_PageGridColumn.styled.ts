import styled from '@emotion/styled';

export const PageGridColumn = styled.div<{ span?: number }>`
	width: calc(${({ span = 'var(--grid-columns)' }) => span} / var(--grid-columns) * 100%);
`;
