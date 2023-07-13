import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';
import { Stack } from '@arcade/library-components/src/components/Stack';
import { color } from '@arcade/library-components/src/components/Theme';

import { SymbolSize } from './_SymbolGrid.types';
import { Slider } from '@arcade/library-components/src/components/Slider';
import { space } from '@arcade/library-components/src/foundations';

export const SymbolGrid_List = styled(ResetList)<{ symbolSize: SymbolSize }>`
	display: grid;
	gap: 0.5rem;
	grid-template-columns: repeat(
		auto-fit,
		minmax(${({ symbolSize }) => 3 + symbolSize}rem, 1fr)
	);
`;

export const SymbolGrid_Actions = styled(Stack)`
	align-items: end;
	background-color: ${color('surface')};
	position: sticky;
	top: 0;
	z-index: 1;
`;

export const SymbolGrid_Action = styled.button`
	text-align: center;
`;

export const SymbolGrid_ActionIcon = styled.div`
	font-size: 2rem;
`;

export const SymbolGrid_SymbolSize = styled(SymbolGrid_Action)`
	max-width: 7rem;
`;

export const SymbolGrid_Slider = styled.div``;
