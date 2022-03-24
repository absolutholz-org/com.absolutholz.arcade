import styled from 'styled-components';

import { IconSize } from './enums/IconSize';

export const Icon = styled.span<{ $size?: IconSize }>`
	height: ${({ $size = IconSize.Inherit }) => $size};
	width: auto;

	path:not([fill]) {
		fill: currentColor;
	}
`;
