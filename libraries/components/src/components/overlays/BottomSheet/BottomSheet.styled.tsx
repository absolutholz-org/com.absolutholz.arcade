import styled from 'styled-components';

import { SpacingSize } from '../../../enums';
import { Overlay } from '../Overlay';

export const BottomSheet = styled(Overlay)`
	margin: auto;
	margin-bottom: 0;
	max-height: calc(100vh - ${SpacingSize.x200});
	max-width: 500px;
	padding: ${SpacingSize.x150};
`;
