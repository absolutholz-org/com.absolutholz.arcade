import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '../Theme';

const TRACK_HEIGHT_IN_EM = 1;
const THUMB_HEIGHT_IN_EM = 2;
const THUMB_WIDTH_IN_EM = 1;

const SliderTrackCss = css`
	background-image: linear-gradient(
		to top left,
		currentColor 50%,
		transparent calc(50% + 1px)
	);
	background-repeat: no-repeat;
	height: ${TRACK_HEIGHT_IN_EM}em;
	/* width: calc(100% - ${THUMB_WIDTH_IN_EM}em); */
`;

const SliderThumbCss = css`
	appearance: none;
	background: ${color('surface')};
	border: 3px solid ${color('surface-on')};
	border-radius: 50vmax;
	height: ${THUMB_HEIGHT_IN_EM}em;
	margin-top: -${(THUMB_HEIGHT_IN_EM - TRACK_HEIGHT_IN_EM) / 2}em;
	width: ${THUMB_WIDTH_IN_EM}em;
`;

export const Slider = styled.input`
	appearance: none;
	background: none;
	/* margin-left: -0.5em; */
	padding-top: ${(THUMB_HEIGHT_IN_EM - TRACK_HEIGHT_IN_EM) / 4}em;
	max-width: 100%;

	&::-webkit-slider-runnable-track {
		${SliderTrackCss}
	}

	&::-moz-range-track {
		${SliderTrackCss}
	}

	&::-webkit-slider-thumb {
		${SliderThumbCss}
	}

	&::-moz-range-thumb {
		${SliderThumbCss}
	}
`;
