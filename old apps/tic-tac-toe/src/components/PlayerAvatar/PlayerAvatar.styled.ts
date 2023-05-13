import styled from 'styled-components';

import { color, radius, typoFamilyCss } from '@arcade/library-components';

export const PlayerAvatar = styled.div`
	align-items: center;
	aspect-ratio: 1 / 1;
	border-radius: ${radius('elliptical')};
	display: flex;
	${typoFamilyCss('brand')};
	font-size: 1.25rem;
	font-weight: 500;
	justify-content: center;
	line-height: 1;
	border: 2px solid ${color('primary')};
	position: relative;
	text-transform: uppercase;
	width: 3.5rem;
	z-index: 0;

	&::before {
		background: red;
		border-radius: 6px / 50%;
		content: '';
		height: calc(100% - 8px);
		left: 4px;
		position: absolute;
		top: 4px;
		width: calc(100% - 8px);
		z-index: -1;
	}
`;
