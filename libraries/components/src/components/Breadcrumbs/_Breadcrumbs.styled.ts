import styled from '@emotion/styled';

import { ResetList } from '../ResetList';
import { Typography } from '../Typography';

export const Breadcrumbs = styled(Typography)``;

export const Breadcrumbs_List = styled(ResetList)`
	display: flex;
	flex-wrap: wrap;

	> li {
		display: inline-flex;

		&:not(:first-child):before {
			content: '/';
			padding-inline: 0.5rem;
		}
	}
`;
