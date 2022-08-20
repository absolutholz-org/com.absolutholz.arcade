import styled from 'styled-components';

import { typoFamily, typoSize } from '../../../foundations';

const typoSizeValues = typoSize(150);

export const HeadlineSubsection = styled.h3`
	font: 100 ${typoSizeValues.fontSize} / ${typoSizeValues.lineHeight} ${typoFamily('headline')};
`;
