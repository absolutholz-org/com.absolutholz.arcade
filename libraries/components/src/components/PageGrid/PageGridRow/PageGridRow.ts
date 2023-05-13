import styled from '@emotion/styled';

export const PageGridRow = styled.div<{ columns?: number }>`
	--grid-columns: ${({ columns = 12 }) => columns};
	display: flex;
	gap: var(--grid-gutter);
`;
