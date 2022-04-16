import styled from 'styled-components';

import { SpacingSize, TypoFamily, TypoSize, TypoWeight } from '../../enums';

const Headline = styled.div`
	font-family: ${TypoFamily.Headline};
	font-weight: ${TypoWeight.Normal};
	margin: 0;
`;

export const Headline100 = styled(Headline)`
	font-size: ${TypoSize.x125};
	line-height: 1.4;
	margin-bottom: ${SpacingSize.x100};
`;

export const Headline200 = styled(Headline)`
	font-size: ${TypoSize.x150};
	line-height: 1.3;
	margin-bottom: ${SpacingSize.x125};
`;

export const Headline300 = styled(Headline)`
	font-size: ${TypoSize.x200};
	line-height: 1.2;
	margin-bottom: ${SpacingSize.x150};
`;

export const Headline400 = styled(Headline)`
	font-size: ${TypoSize.x300};
	line-height: 1.1;
	margin-bottom: ${SpacingSize.x200};
`;
