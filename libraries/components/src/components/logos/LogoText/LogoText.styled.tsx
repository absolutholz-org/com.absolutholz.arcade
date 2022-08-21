import styled from 'styled-components';

import { typoFamily } from '../../../foundations';
import { LogoAbsolutholz as LogoAbsolutholzComponent } from '../LogoAbsolutholz';

export const Logo = styled.span`
	display: inline-block;
	line-height: 1;
	text-align: center;
`;

export const LogoAbsolutholz = styled(LogoAbsolutholzComponent)`
	font-size: 0.6em;
`;

export const LogoArcade = styled.span`
	display: block;
	font-family: ${typoFamily('brand')};
`;
