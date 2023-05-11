import styled, { css } from 'styled-components';

import { color, Icon, radiusCss, typoFamilyCss } from '@arcade/library-components';

export const FieldsetSize = styled.fieldset``;

export const FieldsetSizeLegend = styled.legend`
	${typoFamilyCss('brand')}
`;

export const FieldsetSizeOptionGrid = styled.div`
	align-items: baseline;
	display: flex;
	flex-wrap: wrap;
	gap: min(5vw, 2rem);
`;

export const FieldsetSizeOptionIcon = styled(Icon)`
	border: 3px solid transparent;
	font-size: 5rem;
`;

export const FieldsetSizeOptionLabel = styled.div``;

type ChevronDirection = 'up' | 'down' | 'left' | 'right';
type ChevronRotation = '-45deg' | '135deg' | '-135deg' | '45deg';

function translateChevronDirection(direction: ChevronDirection): ChevronRotation {
	switch (direction) {
		case 'down':
			return '135deg';
		case 'left':
			return '-135deg';
		case 'right':
			return '45deg';
		default:
			return '-45deg';
	}
}

function chevron({
	$direction = 'up',
	$size = '1rem',
	$stroke = '0.25em',
}: {
	$direction?: ChevronDirection;
	$size?: string;
	$stroke?: string;
}) {
	return css`
		border-style: solid;
		border-width: ${$stroke} ${$stroke} 0 0;
		content: '';
		display: inline-block;
		font-size: ${$size};
		height: 1em;
		transform: rotate(${translateChevronDirection($direction)});
		width: 1em;
	`;
}

const ANIMATION_START_POSITION = '-1.25em';
const ANIMATION_END_POSITION = '-1em';

export const FieldsetSizeOption = styled.label`
	text-align: center;

	@keyframes bounce-left {
		0% {
			left: ${ANIMATION_START_POSITION};
		}
		100% {
			left: ${ANIMATION_END_POSITION};
		}
	}

	@keyframes bounce-right {
		0% {
			right: ${ANIMATION_START_POSITION};
		}
		100% {
			right: ${ANIMATION_END_POSITION};
		}
	}

	input:focus-visible + & ${FieldsetSizeOptionIcon} {
		border-color: currentColor;
	}

	input:checked + & ${FieldsetSizeOptionIcon} {
		${radiusCss('equal')}
		color: ${color('accent')};
		position: relative;

		&::before,
		&::after {
			animation-direction: alternate;
			animation-duration: 800ms;
			animation-iteration-count: infinite;
			outline: 0.25rem solid ${color('surface')};
			position: absolute;
			top: calc(50% - 0.5em);
		}

		&::before {
			${chevron({ $direction: 'right' })}
			left: ${ANIMATION_START_POSITION};
			animation-name: bounce-left;
		}

		&::after {
			${chevron({ $direction: 'left' })}
			right: ${ANIMATION_START_POSITION};
			animation-name: bounce-right;
		}
	}
`;
