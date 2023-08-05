import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { transparentColor } from '../Theme/color';

export const HighlightBoard = styled.div``;

export const HighlightBoard_Head = styled.div`
	background: ${transparentColor('secondary', 0.15)};
	height: 0.5rem;
	margin-bottom: 2px;
`;

export const HighlightBoard_Grid = styled.div`
	display: grid;
	gap: 2px;
	grid-template-columns: repeat(5, 1fr);
`;

const fadeAnimation = keyframes`
	10% { 
		background: ${transparentColor('accent', 0.75)};
	}
`;

export const _HighlightBoard_Cell = styled.div<{ delay?: number }>`
	aspect-ratio: 1 / 1;
	background: ${transparentColor('secondary', 0.15)};
`;

export const HighlightBoard_Cell = styled(_HighlightBoard_Cell)<{
	delay?: number;
}>`
	${({ delay }) =>
		delay !== undefined
			? css`
					animation: ${fadeAnimation};
					animation-delay: ${delay}s;
					animation-duration: 6s;
					animation-iteration-count: infinite;
			  `
			: ''}
`;
