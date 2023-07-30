import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { color } from '../Theme';
import { typography } from '../Typography';
import { space } from '../Space';

function buttonStyles(fullWidth?: boolean) {
	return css`
		${typography('m')}

		align-items: center;
		background-color: ${color('accent')};
		border-radius: 0.675rem / 50%;
		color: ${color('accent-on')};
		display: ${fullWidth ? 'flex' : 'inline-flex'};
		font-weight: bold;
		gap: ${space('xxs')};
		height: 3rem;
		justify-content: center;
		max-width: 100%;
		padding-bottom: 0.125em;
		padding-inline: ${space('s')};
		text-decoration: none;
		width: ${fullWidth ? '100%' : 'auto'};

		&:disabled {
			opacity: 0.2;
		}
	`;
}

export const Button = styled.button<{
	fullWidth?: boolean;
}>`
	${({ fullWidth }) => buttonStyles(fullWidth)}
`;

export const ButtonAsAnchor = styled.a<{
	fullWidth?: boolean;
}>`
	${({ fullWidth }) => buttonStyles(fullWidth)}
`;

export const ButtonAsLink = styled(Link)<{
	fullWidth?: boolean;
}>`
	${({ fullWidth }) => buttonStyles(fullWidth)}
`;

export const Button_Icon = styled.div`
	border: 3px solid;
	border-radius: 10px / 50%;
	font-size: 1.5em;
`;

export const Button_Text = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;
