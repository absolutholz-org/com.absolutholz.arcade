import styled from 'styled-components';

import { typoSize } from '../../../foundations/typography/TypoSize';

const typoSizeValues = typoSize(150);

export const HeadlineSubsection = styled.h3`
	font: 100 ${typoSizeValues.fontSize} / ${typoSizeValues.lineHeight}
		var(--typo-special);
`;
