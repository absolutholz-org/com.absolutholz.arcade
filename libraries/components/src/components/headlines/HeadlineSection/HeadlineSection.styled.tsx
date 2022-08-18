import styled from 'styled-components';

import { typoSize } from '../../../foundations/typography/TypoSize';

const typoSizeValues = typoSize(200);

export const HeadlineSection = styled.h2`
	font: 100 ${typoSizeValues.fontSize} / ${typoSizeValues.lineHeight}
		var(--typo-special);
`;
