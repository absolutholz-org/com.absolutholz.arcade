import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const PageSection = styled.div<{ omitTopSpacing?: boolean }>`
	padding-block: var(--space-xl);
	${({ omitTopSpacing = false }) =>
		omitTopSpacing &&
		css`
			padding-top: 0;
		`}
`;
