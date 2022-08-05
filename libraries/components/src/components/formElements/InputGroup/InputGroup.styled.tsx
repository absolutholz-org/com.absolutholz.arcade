import styled from 'styled-components';
import { SpacingSize, TypoSize } from '../../../enums';
import { Elevation } from '../../Elevation';

export const Wrapper = styled.label`
	display: block;
	width: 100%;

	& + & {
		margin-top: ${SpacingSize.x100};
	}
`;

export const Label = styled.div`
	${Elevation(24)}
	background-color: var(--surface);
	box-shadow: none;
	font-size: ${TypoSize.x100};
	margin: 0 0 -0.6em 0.75rem;
	padding: 0 ${SpacingSize.x050};
	position: relative;
	width: fit-content;
`;

export const HelpText = styled.div`
	font-size: ${TypoSize.x080};
	margin-top: ${SpacingSize.x025};
	padding: 0 ${SpacingSize.x125};
`;
