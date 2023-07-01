import styled from '@emotion/styled';

export const SymbolGrid_Label = styled.label`
	align-items: center;
	aspect-ratio: 1 / 1;
	display: flex;
	justify-content: center;
	position: relative;
	transition: opacity 300ms, filter 300ms;
	z-index: 0;
`;

export const SymbolGrid_Input = styled.input`
	bottom: 0;
	position: absolute;
	right: 0;
	z-index: 1;
`;

export const SymbolGrid_Image = styled.img`
	height: 100%;
	object-fit: contain;
	width: 100%;

	input:not(:checked) + & {
		filter: grayscale(1);
		opacity: 0.5;
	}
`;
