import { space } from '@arcade/library-components/src/components/Space';
import styled from '@emotion/styled';

export const StickyFormFooter_Form = styled.form`
	position: relative;
`;

export const StickyFormFooter = styled.div`
	background-color: var(--color-surface);
	bottom: 0;
	padding-block: ${space('2xs')};
	position: sticky;
	text-align: center;
	width: 100%;
`;
