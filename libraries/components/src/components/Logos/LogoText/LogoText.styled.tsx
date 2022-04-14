import styled from 'styled-components';

export const Wrapper = styled.span`
	display: inline-block;
	line-height: 1;
	text-align: center;
`;

export const Absolutholz = styled.span`
	font-size: 0.631em;
`;

export const Arcade = styled.span`
	display: block;
	/* 
	doubled monospace is a fix for some browsers that mess with the size of this font
	https://stackoverflow.com/questions/38781089/font-family-monospace-monospace 
	*/
	font-family: 'GamePlayed', monospace, monospace;
`;
