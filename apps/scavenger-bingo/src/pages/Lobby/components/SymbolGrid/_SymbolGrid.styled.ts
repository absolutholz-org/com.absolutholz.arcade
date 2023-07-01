import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';

export const SymbolGrid_List = styled(ResetList)`
	display: grid;
	gap: 0.5rem;
	grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
`;
