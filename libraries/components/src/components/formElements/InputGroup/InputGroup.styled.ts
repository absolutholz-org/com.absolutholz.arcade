import styled from 'styled-components';

import { elevate, space, typoSizeCss } from '../../../foundations';

export const InputGroup = styled.label`
	display: block;
	width: 100%;

	& + & {
		margin-top: ${space(100)};
	}
`;

export const InputGroupLabel = styled.div`
	${typoSizeCss(100)};
	box-shadow: none;
	margin-block-end: 0.75rem;
	padding-inline: ${space(50)};
	position: relative;
	width: fit-content;
`;

export const InputGroupHelpText = styled.div`
	${typoSizeCss(100)};
	margin-top: ${space(25)};
	padding: 0 ${space(125)};
`;
