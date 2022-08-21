import styled from 'styled-components';

import { typoFamily, typoSize } from '../../../foundations';

const typoSizeValues = typoSize(200);

export const HeadlineSection = styled.h2`
	font: 100 ${typoSizeValues.fontSize} / ${typoSizeValues.lineHeight} ${typoFamily('brand')};
	margin-block: 0;
`;
