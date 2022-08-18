import styled, { css } from 'styled-components';

import { radiusCss } from '../../../foundations/borders/radius';
import { color } from '../../../foundations/colors/color';
import { elevate } from '../../../foundations/elevation/elevation';
import { space } from '../../../foundations/spacing/space';
import { ButtonVariant } from './Button.annotations';

// export const BTN = styled.button``;

const BUTTON_VARIANT_DEFAULT = 'filled';

export const Button = styled.button<{
	$inline?: boolean;
	$variant?: ButtonVariant;
}>`
	align-items: center;
	/* background-color: ${color('accent')}; */
	border: 2px solid transparent;
	${radiusCss('elliptical')}
	color: ${color('accent')};
	display: ${({ $inline = true }) => ($inline ? 'inline-flex' : 'flex')};
	font-weight: 500;
	gap: ${space(50)};
	/* letter-spacing: 0.05ch; */
	justify-content: center;
	line-height: 1.428;
	min-height: 2.5rem;
	padding-inline: ${space(150)};
	text-align: center;
	text-decoration: none;
	/* text-transform: uppercase; */

	${({ $inline = true }) =>
		!$inline &&
		css`
			width: 100%;
		`}

	${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === 'elevated' &&
		css`
			${elevate(2)}
			background-color: ${color('surface')};
		`} 
			
			${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === 'filled' &&
		css`
			background-color: ${color('accent')};
			color: ${color('surface')};
		`}
		
		${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === 'outlined' &&
		css`
			/* background-color: var(--surface); */
			border-color: currentColor;
		`} 

    ${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === 'tonal' &&
		css`
			background-color: ${color('accent', 0.25)};
			color: ${color('primary')};
		`}

		/* https://reactgo.com/css-pulse-animation/ */
		@keyframes pulse {
		0% {
			outline: 2px solid ${color('accent', 0)};
			outline-offset: 0px;
		}
		40% {
			outline: 2px solid ${color('accent', 0.75)};
			outline-offset: 2px;
		}
		100% {
			outline: 8px solid ${color('accent', 0)};
		}
	}

	&:hover {
	}

	&:focus {
		animation: pulse 2s infinite linear;

		@media (prefers-reduced-motion) {
			animation: none;
			outline: 2px solid ${color('accent', 0.75)};
		}
	}

	&[disabled] {
		filter: brightness(0.75) grayscale(0.5);
		cursor: not-allowed;
	}
`;
