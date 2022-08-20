import styled, { css } from 'styled-components';

import { elevate } from '../../foundations/elevation/elevation';

export const Card = styled.div<{ $isPickedUp?: boolean }>`
	${elevate(1)}
	background: var(--surface);
	border-radius: 3px;
	color: var(--on-surface);

	${({ $isPickedUp = false }) =>
		$isPickedUp &&
		css`
			${elevate(4)}
		`}
`;
