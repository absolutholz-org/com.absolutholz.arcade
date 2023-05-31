import styled from '@emotion/styled';

import { ResetList } from '@arcade/library-components/src/components/ResetList';
import { space } from '@arcade/library-components/src/components/Space';

export const SymbolPresets_List = styled(ResetList)`
	display: flex;
	flex-wrap: wrap;
	gap: ${space('xs')};
`;

export const SymbolPresets_Button = styled.button`
	padding: ${space('xxs')};
`;

export const SymbolPresets_Media = styled.div`
	aspect-ratio: 1 / 1;
	position: relative;
	width: 4rem;
`;

export const SymbolPresets_Image = styled.img`
	height: 100%;
	object-fit: contain;
	width: 100%;
`;
