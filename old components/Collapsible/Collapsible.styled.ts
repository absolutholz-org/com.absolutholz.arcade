import styled from 'styled-components';

import { color } from '../../foundations';
import { Icon } from '../Icon';

export const CollapsibleSummary = styled.summary`
	&::marker {
		content: '';
		display: none;
	}
`;

export const CollapsibleContent = styled.div``;

export const CollapsibleSummaryIcon = styled(Icon).attrs({ size: '1.5em' })`
	left: 0;
	position: absolute;
	top: 0.125rem;
	transition: transform 250ms;
`;

export const Collapsible = styled.details`
	padding-left: 2rem;
	position: relative;

	&[open] > ${CollapsibleSummary} > ${CollapsibleSummaryIcon} {
		color: ${color('accent')};
		transform: rotate(180deg);
	}
`;
