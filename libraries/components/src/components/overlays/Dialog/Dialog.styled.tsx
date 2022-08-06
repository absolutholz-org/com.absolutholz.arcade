import styled from 'styled-components';

import { SpacingSize, TypoSize } from '../../../enums';
import { Overlay } from '../Overlay';
import { Elevation } from '../../Elevation';

export const Dialog = styled(Overlay)`
	border-radius: 10px / 50%;
	margin: auto;
	max-width: min(calc(100vw - (2 * var(--offset))), 500px);
	min-width: min(calc(100vw - (2 * var(--offset))), 400px);
	overflow: visible;
	padding: ${SpacingSize.x150};
	position: relative;
`;

export const Header = styled.header`
	border-bottom: 1px solid;
	font-size: ${TypoSize.x150};
	margin-bottom: ${SpacingSize.x100};
	padding-bottom: ${SpacingSize.x050};
`;

export const Footer = styled.footer`
	margin-top: ${SpacingSize.x150};
`;

export const CloseButton = styled.button`
	${Elevation(2)}
	align-items: center;
	background: inherit;
	border-radius: 10px / 50%;
	display: flex;
	height: 3rem;
	justify-content: center;
	position: absolute;
	right: -8px;
	top: -8px;
	width: 3rem;
`;
