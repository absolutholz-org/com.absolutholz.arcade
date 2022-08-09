import styled from 'styled-components';

import { SpacingSize } from '../../enums';
import { Headline100 } from '../headlines';
import { PageLayoutContainer } from '../PageLayoutContainer';

export const SiteHeader = styled.header`
	padding-block: ${SpacingSize.x050};

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const SiteHeaderPageLayoutContainer = styled(PageLayoutContainer)`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;
