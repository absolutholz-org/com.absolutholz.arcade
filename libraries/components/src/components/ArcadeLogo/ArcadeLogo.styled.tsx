import styled from 'styled-components';
import { TypoWeight } from '../../enums';

export const ArcadeLogo = styled.div`
	display: inline-flex;
	font-size: 5rem;
	font-weight: ${TypoWeight.Light};
	line-height: 1;
	position: relative;
`;

export const Absolutholz = styled.div`
	font-size: 0.25em;
	font-weight: ${TypoWeight.Bold};
	position: absolute;
	right: 2.75ch;
	top: 0;
	letter-spacing: 0.2ch;
`;

export const Arcade = styled.div`
	/* &::first-letter {
		font-size: 1.25em;
	} */
`;
