import styled from 'styled-components';

import { Icon } from '@arcade/components';

export const Cell = styled.div`
	aspect-ratio: 1 / 1;
	background: var(--surface);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled.button`
	height: calc(100% - 1rem);
	width: calc(100% - 1rem);

	> ${Icon} {
		height: 100%;
	}
`;
