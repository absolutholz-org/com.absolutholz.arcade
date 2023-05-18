import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const _Button = styled.button<{ $outlined?: boolean }>`
	align-items: center;
	border: 4px solid transparent;
	border-radius: 13px / 50%;
	display: inline-flex;
	font-size: 1.5rem;
	font-weight: bold;
	height: 3rem;
	justify-content: center;
	line-height: 1;
	padding-bottom: 0.125em;
	padding-inline: 2rem;
	text-decoration: none;

	${({ $outlined = false }) =>
		$outlined
			? css`
					color: var(--color-accent);
			  `
			: css`
					background-color: var(--color-accent);
					color: var(--color-accent-contrast);
			  `}

	&:disabled {
		opacity: 0.2;
	}
`;
