import styled from 'styled-components';

import { color, radius, typoFamilyCss } from '../../../foundations';

export const LogoAbsolutholz = styled.span`
	display: inline-flex;
	${typoFamilyCss('system')}
	line-height: 1;
`;

const radiusValue = radius('equal');

export const LogoAbsolutholzAbsolut = styled.span`
	border: 2px solid;
	border-radius: ${radiusValue};
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	font-weight: 400;
	padding: 0.25em calc(0.25ch + ${radiusValue}) 0.25em 0.5ch;
`;

export const LogoAbsolutholzHolz = styled.span`
	align-items: center;
	background-color: ${color('primary')};
	border-radius: ${radiusValue};
	color: ${color('surface')};
	display: flex;
	font-weight: 700;
	margin-left: -${radiusValue};
	padding: 0.25em 0.5ch 0.25em 0.25ch;
	text-transform: uppercase;
`;
