import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { color } from '@arcade/library-components/src/components/Theme';

import { SymbolSize } from './_SymbolGrid.types';

export const SymbolGrid_List = styled(ResetList)<{ symbolSize: SymbolSize }>`
	display: grid;
	gap: 0.5rem;
	grid-template-columns: repeat(auto-fit, minmax(${({ symbolSize }) => 3 + symbolSize}rem, 1fr));
`;

export const SymbolGrid_SymbolSize = styled.label`
	max-width: 10rem;
`;

export const SymbolGrid_Actions = styled(Stack)`
	background-color: ${color('surface')};
	position: sticky;
	top: 0;
	z-index: 1;
`;
