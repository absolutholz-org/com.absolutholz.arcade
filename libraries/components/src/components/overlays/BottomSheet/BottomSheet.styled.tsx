import styled from 'styled-components';

import { space } from '../../../foundations';
import { Overlay } from '../Overlay';

export const BottomSheet = styled(Overlay)`
	margin: auto;
	margin-bottom: 0;
	max-height: calc(100vh - ${space(200)});
	max-width: 500px;
	padding: ${space(150)};
`;
