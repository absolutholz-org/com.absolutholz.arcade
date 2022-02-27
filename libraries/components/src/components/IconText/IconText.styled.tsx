import styled from 'styled-components';

export const IconText = styled.div<{ $verticalAlignment?: string }>`
	align-items: ${({ $verticalAlignment = 'center' }) => $verticalAlignment};
	display: flex;
	gap: 1rem;
`;

export const IconWrapper = styled.div`
	display: flex;
`;
