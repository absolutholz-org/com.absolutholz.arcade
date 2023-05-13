import styled from '@emotion/styled';

export const PageGridColumn = styled.div<{ span: number }>`
	width: calc(${({ span }) => span} / var(--grid-columns) * 100%);
`;
