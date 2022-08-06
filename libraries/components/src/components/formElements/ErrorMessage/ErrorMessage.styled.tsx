import styled from 'styled-components';
import { SpacingSize } from '../../../enums';

export const ErrorMessage = styled.div`
	background: hsl(var(--error));
	border-radius: 10px / 50%;
	color: hsl(var(--on-error));
	margin-block: ${SpacingSize.x100};
	padding: ${SpacingSize.x050} var(--gutter);
`;
