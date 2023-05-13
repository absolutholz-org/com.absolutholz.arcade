// import { cloneElement } from 'react';
// import styled from 'styled-components';

import type { IconProps } from './Icon.annotations';
import * as S from './Icon.styled';

export function Icon({ icon, size = '1em', ...props }: IconProps): JSX.Element {
	return (
		// TODO: find a way to do away with the wrapper
		<S.Icon $size={size} {...props}>
			{icon}
		</S.Icon>
	);
}

// export const Icon = styled(({ icon, $size = '1em', ...props }: IconProps) =>
// 	cloneElement(icon, props)
// )`
// 	display: inline-flex;
// 	height: ${({ $size = '1em' }) => $size};
// 	width: auto;

// 	path:not([fill]) {
// 		fill: currentColor;
// 	}
// `;
