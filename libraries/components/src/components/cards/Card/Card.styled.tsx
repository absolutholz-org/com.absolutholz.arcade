import styled, { css } from 'styled-components';

import { Elevation } from '../../Elevation';

export const Card = styled.div<{ $isPickedUp?: boolean }>`
	${Elevation(1)}
	background: var(--surface);
	border-radius: 3px;
	color: var(--on-surface);

	${({ $isPickedUp = false }) =>
		$isPickedUp &&
		css`
			${Elevation(4)}
		`}
`;
