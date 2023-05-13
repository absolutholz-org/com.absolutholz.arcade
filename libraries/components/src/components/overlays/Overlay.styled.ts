import styled from 'styled-components';

import { color, elevate } from '../../foundations';

export const Overlay = styled.dialog`
	${elevate(24)}
	background-color: ${color('surface')};
`;
