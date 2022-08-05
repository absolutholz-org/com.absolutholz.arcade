import styled, { css } from 'styled-components';
import { SpacingSize } from '../../../enums';

export const ButtonGroup = styled.div<{
	$horizontalAlignment?: 'start' | 'end' | 'center' | 'space-between';
}>`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: ${SpacingSize.x100};
	${({ $horizontalAlignment = 'end' }) => css`
		justify-content: ${$horizontalAlignment};
	`};
`;
