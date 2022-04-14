import styled from 'styled-components';

export const LogoInlineText = styled.span`
	display: inline-block;
`;

export const LogoInlineTextArcade = styled.span`
	display: inline-block;
	/* 
	doubled monospace is a fix for some browsers that mess with the size of this font
	https://stackoverflow.com/questions/38781089/font-family-monospace-monospace 
	*/
	font: normal 1.15em / 1 'GamePlayed', monospace, monospace;
`;
