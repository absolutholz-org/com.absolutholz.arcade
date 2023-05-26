import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';
import { space } from '@arcade/library-components/src/components/Space';

export const SymbolPresets_List = styled(ResetList)`
	display: grid;
	gap: ${space('s')};
	grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
`;

export const SymbolPresets_Label = styled.label``;

export const SymbolPresets_Input = styled.input``;
