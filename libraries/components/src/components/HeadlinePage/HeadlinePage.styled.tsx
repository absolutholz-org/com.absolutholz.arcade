import styled from 'styled-components';

import { SpacingSize, TypoSize, TypoWeight } from '../../enums';

export const HeadlinePage = styled.div`
	font-size: ${TypoSize.x400};
	font-weight: ${TypoWeight.Light};
	line-height: 1.2;
	margin-bottom: ${SpacingSize.x100};
	margin-top: ${SpacingSize.x300};
`;
