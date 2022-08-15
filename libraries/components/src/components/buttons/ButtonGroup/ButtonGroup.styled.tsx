import styled, { css } from 'styled-components';
import { space } from '../../../foundations/spacing/space';

export const ButtonGroup = styled.div<{
	$horizontalAlignment?: 'start' | 'end' | 'center' | 'space-between';
}>`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	gap: ${space(100)};
	${({ $horizontalAlignment = 'end' }) => css`
		justify-content: ${$horizontalAlignment};
	`};
`;
