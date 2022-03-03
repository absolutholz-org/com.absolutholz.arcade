import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconText } from '../IconText';
import { PageLayoutContainer } from '../PageLayoutContainer';
import { SpacingSize, TypoSize } from '../..';

export const SiteHeader = styled.header`
	padding-bottom: ${SpacingSize.x050};
	padding-top: ${SpacingSize.x050};
`;

export const SiteHeaderContainer = styled(PageLayoutContainer)`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const LogoLink = styled(Link)`
	color: inherit;
	font-size: ${TypoSize.x150};
	text-decoration: none;
`;

export const LogoIconText = styled(IconText)`
	gap: ${SpacingSize.x050};
`;
