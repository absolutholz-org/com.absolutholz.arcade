import styled, { css } from 'styled-components';

export const PageLayoutContainer = styled.div<{
	$size?: 'base' | 'wide' | 'full';
}>`
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
