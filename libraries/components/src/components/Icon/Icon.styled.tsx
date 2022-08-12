import styled from 'styled-components';

import { IconSize } from './Icon.annotations';

export const Icon = styled.span<{ $size?: IconSize }>`
	height: ${({ $size = 'inherit' }) => $size};
	width: auto;

	path:not([fill]) {
		fill: currentColor;
	}
`;
