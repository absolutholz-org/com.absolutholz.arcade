import styled from '@emotion/styled';

import { FoundSymbol } from '../FoundSymbol';

export const FreeSpaceSymbol = styled.div`
	position: relative;
	z-index: 0;
`;

export const FreeSpaceSymbol_FoundSymbol = styled(FoundSymbol)`
	height: 100%;
	inset: 0;
	margin: auto;
	position: absolute;
	width: 100%;
	z-index: 1;
`;

const OUTLINE_OFFSET = '2px';

export const FreeSpaceSymbol_FreeText = styled.div`
	align-items: center;
	display: flex;
	font-weight: bold;
	inset: 0;
	justify-content: center;
	line-height: 1.1;
	margin: auto;
	position: absolute;
	text-align: center;
	text-shadow: ${OUTLINE_OFFSET} ${OUTLINE_OFFSET} black,
		-${OUTLINE_OFFSET} -${OUTLINE_OFFSET} black,
		-${OUTLINE_OFFSET} ${OUTLINE_OFFSET} black,
		${OUTLINE_OFFSET} -${OUTLINE_OFFSET} black, ${OUTLINE_OFFSET} 0 black,
		-${OUTLINE_OFFSET} 0 black, 0 ${OUTLINE_OFFSET} black,
		0 -${OUTLINE_OFFSET} black;
	z-index: 2;
`;
