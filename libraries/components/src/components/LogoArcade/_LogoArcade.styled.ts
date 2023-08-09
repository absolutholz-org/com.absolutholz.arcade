import styled from '@emotion/styled';

// import { typoFamily } from '../../../foundations';
import { LogoAbsolutholz } from '../LogoAbsolutholz';
import { space } from '../../foundations/spacing/space';
import { css } from '@emotion/react';

export const LogoArcade = styled.span`
	display: inline-block;
	line-height: 1;
	text-align: center;
`;

export const LogoArcade_Absolutholz = styled(LogoAbsolutholz)`
	font-size: 0.6em;
`;

export const LogoArcade_Arcade = styled.span<{ isSingleLine: boolean }>`
	display: ${({ isSingleLine }) => (isSingleLine ? 'inline-block' : 'block')};
	${({ isSingleLine }) =>
		isSingleLine
			? css`
					margin-left: 1ch;
			  `
			: css`
					margin-top: ${space('xxxs')};
			  `};
	/* font-family: {typoFamily('brand')}; */
`;
