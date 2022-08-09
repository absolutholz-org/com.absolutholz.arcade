import styled from 'styled-components';

import { color } from '../../../foundations/colors/color';

export const LogoAbsolutholz = styled.span`
	display: inline-flex;
	line-height: 1;
`;

const BORDER_RADIUS = '3px';

export const LogoAbsolutholzAbsolut = styled.span`
	border: 2px solid;
	border-radius: ${BORDER_RADIUS};
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	font-weight: 500;
	padding: 0.25em calc(0.25ch + ${BORDER_RADIUS}) 0.25em 0.5ch;
`;

export const LogoAbsolutholzHolz = styled.span`
	background-color: ${color('primary')};
	border: 2px solid ${color('primary')};
	border-radius: ${BORDER_RADIUS};
	color: ${color('surface')};
	margin-left: -${BORDER_RADIUS};
	padding: 0.25em 0.5ch 0.25em 0.25ch;
`;
