import styled, { css } from 'styled-components';

import { ContentContainerProps } from './ContentContainer.annotations';

export const ContentContainer = styled.div<ContentContainerProps>`
	margin-inline: auto;
	padding-inline: var(--offset);

	${({ $size = 'base' }) =>
		$size === 'base' &&
		css`
			max-width: 90rem;
		`}
	${({ $size }) =>
		$size === 'wide' &&
		css`
			max-width: 100rem;
		`}
	${({ $size }) =>
		$size === 'full' &&
		css`
			max-width: 100%;
		`}
`;
