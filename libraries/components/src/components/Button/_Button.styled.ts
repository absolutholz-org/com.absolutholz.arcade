import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ButtonSize } from './_Button.types';
import { color } from '../Theme';
import { typography } from '../Typography';
import { space } from '../Space';

export const Button = styled.button<{
	outlined?: boolean;
	size?: ButtonSize;
	fullWidth?: boolean;
}>`
	${({ size = 's' }) => typography(size === 's' ? 's' : 'm')};
	height: ${({ size = 's' }) => (size === 's' ? '2.25rem' : '3rem')};
	padding-inline: ${({ size = 's' }) => space(size === 's' ? 's' : 'm')};

	align-items: center;
	border: 4px solid transparent;
	border-radius: 13px / 50%;
	display: ${({ fullWidth = false}) => fullWidth ? 'flex' : 'inline-flex'};
	font-weight: bold;
	justify-content: center;
	line-height: 1;
	padding-bottom: 0.125em;
	text-decoration: none;
	width: ${({ fullWidth = false}) => fullWidth ? '100%' : 'auto'};

	${({ outlined = true }) =>
		outlined
			? css`
					border-color: var(--button-surface, ${color('accent')});
					color: var(--button-surface-on, ${color('surface-on')});
			  `
			: css`
					background-color: var(--button-surface, ${color('accent')});
					color: var(--button-surface-on, ${color('accent-on')});
			  `}

	&:disabled {
		opacity: 0.2;
	}
`;
