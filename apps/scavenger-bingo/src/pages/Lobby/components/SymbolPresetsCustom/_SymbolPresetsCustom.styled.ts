import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';
import { space } from '@arcade/library-components/src/foundations/spacing/space';

export const SymbolPresetsCustom_List = styled(ResetList)`
	display: flex;
	flex-wrap: wrap;
	gap: ${space('xs')};
`;

export const SymbolPresetsCustom_Button = styled.button`
	padding: ${space('xxs')};
`;
