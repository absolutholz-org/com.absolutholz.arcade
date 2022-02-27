import styled, { css } from 'styled-components';
import { ButtonVariant } from './IButton';

// export const BTN = styled.button``;

const BUTTON_VARIANT_DEFAULT = ButtonVariant.Filled;

export const Button = styled.button<{
	$inline?: boolean;
	$variant?: ButtonVariant;
}>`
	align-items: center;
	border-radius: 3px;
	display: ${({ $inline = false }) => ($inline ? 'inline-flex' : 'flex')};
	font-weight: 500;
	letter-spacing: 0.05ch;
	justify-content: center;
	line-height: 1;
	min-height: 2.5em;
	padding: 0 1.5rem;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;

	${({ $inline = false }) =>
		!$inline &&
		css`
			width: 100%;
		`}

	${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Filled &&
		css`
			background: var(--accent);
			color: var(--on-accent);
		`}

    ${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Outlined &&
		css`
			border: 3px solid;
			color: var(--accent);
		`}

    ${({ $variant = BUTTON_VARIANT_DEFAULT }) =>
		$variant === ButtonVariant.Ghost &&
		css`
			color: var(--accent);
		`}

    &:focus,
    &:hover {
	}

	&[disabled] {
		filter: brightness(0.75) grayscale(0.5);
		cursor: not-allowed;
	}
`;
