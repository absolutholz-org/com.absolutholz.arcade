import { css } from '@emotion/react';
import styled from '@emotion/styled';
import MuiButton from '@mui/base/Button';

import { ButtonSize } from './_Button.types';

export const Button = styled(MuiButton)<{
	outlined?: boolean;
	size?: ButtonSize;
}>`
	align-items: center;
	border: 4px solid transparent;
	border-radius: 13px / 50%;
	display: inline-flex;
	font-weight: bold;
	justify-content: center;
	line-height: 1;
	padding-bottom: 0.125em;
	text-decoration: none;

	font-size: ${({ size = 's' }) => (size === 's' ? '1.125rem' : '1.5rem')};
	height: ${({ size = 's' }) => (size === 's' ? '2.25rem' : '3rem')};
	padding-inline: ${({ size = 's' }) => (size === 's' ? '1rem' : '2rem')};

	${({ outlined = true }) =>
		outlined
			? css`
					border-color: var(--color-accent);
					color: var(--color-surface-contrast);
			  `
			: css`
					background-color: var(--color-accent);
					color: var(--color-accent-contrast);
			  `}

	&:disabled {
		opacity: 0.2;
	}
`;
