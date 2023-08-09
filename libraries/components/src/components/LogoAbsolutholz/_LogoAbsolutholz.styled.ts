import styled from '@emotion/styled';

import { color } from '../Theme/color';
import { LogoAbsolutholzSize } from './_LogoAbsolutholz.types';
import { css } from '@emotion/react';

export const LogoAbsolutholz = styled.span<{ size: LogoAbsolutholzSize }>`
	align-items: center;
	border: 2px solid;
	border-radius: 50vmax;
	display: inline-flex;
	${({ size }) =>
		size !== 'm' &&
		css`
			font-size: ${size === 'l' ? '1.5em' : '0.75em'};
		`}
	line-height: 1;
	overflow: hidden;
`;

// const radiusValue = radius('equal');

export const LogoAbsolutholz_Absolut = styled.span`
	font-weight: 400;
	padding: 0.25em 0.5ch 0.25em 1ch;
`;

export const LogoAbsolutholz_Holz = styled.span`
	align-items: center;
	background-color: ${color('surface-on')};
	color: ${color('surface')};
	display: flex;
	font-weight: 700;
	padding: 0.25em 1ch 0.25em 0.5ch;
	text-transform: uppercase;
`;
