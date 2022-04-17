import styled from 'styled-components';
import { SpacingSize, TypoSize } from '../../../enums';

export const Wrapper = styled.label`
	display: block;

	& + & {
		margin-top: ${SpacingSize.x100};
	}
`;

export const Label = styled.div`
	font-size: ${TypoSize.x100};
	margin-bottom: ${SpacingSize.x050};
`;
