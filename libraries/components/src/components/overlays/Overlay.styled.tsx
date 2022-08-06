import styled from 'styled-components';

import { Elevation } from '../Elevation';

export const Overlay = styled.dialog`
	${Elevation(24)}
	background-color: var(--surface);
`;
