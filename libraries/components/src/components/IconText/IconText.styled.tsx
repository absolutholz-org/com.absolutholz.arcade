import styled from 'styled-components';
import { SpacingSize } from '../../enums';

export const IconText = styled.div<{ $verticalAlignment?: string }>`
	align-items: ${({ $verticalAlignment = 'center' }) => $verticalAlignment};
	display: flex;
	gap: ${SpacingSize.x100};
`;

export const IconWrapper = styled.div`
	display: flex;
`;
