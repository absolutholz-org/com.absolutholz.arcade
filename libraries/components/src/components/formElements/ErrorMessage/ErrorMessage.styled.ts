import styled from 'styled-components';

import { color, space } from '../../../foundations';

export const ErrorMessage = styled.div`
	background: ${color('error', 0.125)};
	border-radius: 10px / 50%;
	color: ${color('error')};
	margin-block: ${space(100)};
	padding: ${space(50)} var(--gutter);
`;
