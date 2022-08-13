import styled from 'styled-components';

import { IconSize } from './Icon.annotations';

export const Icon = styled.span<{ $size?: IconSize }>`
	display: inline-flex;

	// TODO: find a way to do away with the wrapper
	> svg {
		height: ${({ $size = '1em' }) => $size};
		width: auto;
	}

	path:not([fill]) {
		fill: currentColor;
	}
`;
