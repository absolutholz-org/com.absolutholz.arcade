import styled from 'styled-components';

import { color, space, typoFamily, typoSize } from '../../foundations';

export const SiteFooter = styled.footer`
	border-top: 1px solid ${color('secondary')};
	padding-top: ${space(200)};

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const SiteFooterNavigation = styled.nav`
	display: flex;
	flex-wrap: wrap;
	gap: 4ch;
`;

export const ColorScheme = styled.div`
	align-items: center;
	display: inline-flex;
	gap: 0.5rem 1ch;
`;

export const SiteFooterGames = styled.div``;

const typoSizeValues = typoSize(80);

export const SiteFooterHeadline = styled.h3`
	font: 100 ${typoSizeValues.fontSize} / ${typoSizeValues.lineHeight} ${typoFamily('brand')};
	margin-block: 0;
`;

export const SiteFooterLinkList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: ${space(25)} 4ch;
	list-style: none;
	margin-block: 0;
	padding-left: 0;
`;
