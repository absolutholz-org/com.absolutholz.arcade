import styled from 'styled-components';

import { SpacingSize } from '../../enums';

export const SectionPadded = styled.div<{ $spacing?: SpacingSize }>`
	padding-bottom: ${({ $spacing = SpacingSize.x100 }) => $spacing};
	padding-top: ${({ $spacing = SpacingSize.x100 }) => $spacing};
`;
