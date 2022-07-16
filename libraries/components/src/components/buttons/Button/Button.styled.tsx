import styled, { css } from 'styled-components';
import { SpacingSize, SurfaceTheme } from '../../../enums';
import { themeSurface } from '../../../styles/themeSurface';
import { Elevation } from '../../Elevation';
import { ButtonVariant } from './IButton';

// export const BTN = styled.button``;

const BUTTON_VARIANT_DEFAULT = ButtonVariant.Filled;

export const Button = styled.button<{
	$inline?: boolean;
	$variant?: ButtonVariant;
}>`
	${themeSurface({
		theme: SurfaceTheme.Accent,
		includeBackground: false,
	})}
	align-items: center;
	border: 1px solid transparent;
	border-radius: 10px / 50%;
	color: hsl(var(--accent));
	display: ${({ $inline = false }) => ($inline ? 'inline-flex' : 'flex')};
	font-weight: 500;
	gap: ${SpacingSize.x050};
	/* letter-spacing: 0.05ch; */
	justify-content: center;
	line-height: 1.428;
	min-height: 2.5rem;
	padding: 0 ${SpacingSize.x150};
	text-align: center;
	text-decoration: none;
	/* text-transform: uppercase; */

	${({ $inline = false }) =>
		!$inline &&
		css`
			width: 100%;
		`}

	${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Elevated &&
		css`
			${Elevation(2)}
			background-color: var(--surface);
		`} 
		
		${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Filled &&
		css`
			${themeSurface({
				theme: SurfaceTheme.Accent,
			})}
		`}
		
		${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Outlined &&
		css`
			/* background-color: var(--surface); */
			border-color: currentColor;
		`} 

    ${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Tonal &&
		css`
			background-color: hsl(var(--accent), 0.25);
			color: var(--on-surface);
		`}

    &:focus,
    &:hover {
	}

	&[disabled] {
		filter: brightness(0.75) grayscale(0.5);
		cursor: not-allowed;
	}
`;
