import styled from 'styled-components';

import { radius, space, typoSizeCss } from '../../../foundations';

export const Input = styled.input`
	${typoSizeCss(112.5)}
	border: 2px solid;
	border-radius: ${radius('elliptical')};
	display: block;
	min-height: 3rem;
	padding: 0 ${space(100)};
	width: 100%;
`;
