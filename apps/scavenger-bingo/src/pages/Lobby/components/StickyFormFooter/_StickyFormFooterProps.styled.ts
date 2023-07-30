import styled from '@emotion/styled';

import { space } from '@arcade/library-components/src/foundations/spacing/space';

export const StickyFormFooter_Form = styled.form`
	position: relative;
`;

export const StickyFormFooter = styled.div`
	background-color: var(--color-surface);
	bottom: 0;
	padding-block: ${space('xxs')};
	position: sticky;
	text-align: center;
	width: 100%;
	z-index: 1;
`;
