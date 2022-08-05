import styled from 'styled-components';

import { BorderRadius, SpacingSize, TypoSize } from '../../../enums';

export const Input = styled.input`
	border: 2px solid;
	border-radius: ${BorderRadius.Base};
	display: block;
	font-size: ${TypoSize.x1125};
	min-height: 3rem;
	padding: 0 ${SpacingSize.x100};
	width: 100%;
`;
