import styled from '@emotion/styled';

import { elevate, radiusCss, space, typoSizeCss } from '../../../foundations';
import { Overlay } from '../Overlay';

export const Dialog = styled(Overlay)`
	${radiusCss('elliptical')}
	margin: auto;
	max-width: min(calc(100vw - (2 * var(--offset))), 500px);
	min-width: min(calc(100vw - (2 * var(--offset))), 400px);
	overflow: visible;
	padding: ${space(150)};
	position: relative;
`;

export const Header = styled.header`
	${typoSizeCss(125)}
	border-bottom: 1px solid;
	margin-bottom: ${space(100)};
	padding-bottom: ${space(100)};
`;

export const Footer = styled.footer`
	margin-top: ${space(150)};
`;

export const CloseButton = styled.button`
	${elevate(2)}
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
