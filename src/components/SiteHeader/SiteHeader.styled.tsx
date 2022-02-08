import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IconText } from '../IconText';
import { PageLayoutContainer } from '../PageLayoutContainer';

export const SiteHeader = styled.header`
	padding-bottom: 0.5rem;
	padding-top: 0.5rem;
`;

export const SiteHeaderContainer = styled(PageLayoutContainer)`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const LogoLink = styled(Link)`
	color: inherit;
	font-size: 1.5rem;
	text-decoration: none;
`;

export const LogoIconText = styled(IconText)`
	gap: 0.5rem;
`;
