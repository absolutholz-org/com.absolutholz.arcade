import styled from '@emotion/styled';

import { space } from '../../../foundations/spacing/space';
import { Typography } from '../../Typography';
import { color, transparentColor } from '../../Theme/color';

const BORDER_THICKNESS_IN_PX = 1;

export const SegmentedControlOption = styled.button`
	align-items: center;
	border: ${BORDER_THICKNESS_IN_PX}px solid ${color('surface-on')};
	color: ${color('surface-on')};
	display: flex;
	height: 2.5rem;
	justify-content: center;
	padding-inline: ${space('xs')};
	text-transform: capitalize; // not entirely correct ... correct would be sentence case

	&:first-child {
		border-top-left-radius: 50vmax;
		border-bottom-left-radius: 50vmax;
	}

	&:last-child {
		border-top-right-radius: 50vmax;
		border-bottom-right-radius: 50vmax;
	}

	&:not(:first-child) {
		margin-left: -${BORDER_THICKNESS_IN_PX}px;
	}

	&:hover {
		background-color: ${transparentColor('surface-on', 0.075)};
	}

	&:focus {
		background-color: ${transparentColor('surface-on', 0.1)};
	}

	&:active {
		background-color: ${transparentColor('surface-on', 0.15)};
	}

	&:disabled {
		border-color: ${transparentColor('surface-on', 0.12)};
		color: ${transparentColor('surface-on', 0.38)};
	}

	&[aria-selected='true'] {
		background-color: ${transparentColor('accent', 0.5)};

		&:hover {
			background-color: ${transparentColor('accent', 0.75)};
		}

		&:focus {
			background-color: ${transparentColor('accent', 0.8)};
		}

		&:active {
			background-color: ${transparentColor('accent', 0.85)};
		}
	}
`;

export const SegmentedControlOption_Icon = styled.div`
	&:not(:only-child) {
		margin-right: ${space('xxxs')};
	}
`;

export const SegmentedControlOption_Text = styled(Typography)``;
