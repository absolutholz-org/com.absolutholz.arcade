import styled from 'styled-components';

import { SpacingSize } from '../../enums';
import { color } from '../../foundations/colors/color';
import { ColorSchemeToggler as ColorSchemeTogglerComponent } from '../ColorSchemeToggler';

export const SiteFooter = styled.div`
	border-top: 1px solid ${color('primary', 0.5)};
	padding-top: ${SpacingSize.x200};

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const SiteFooterSection = styled.div`
	& + & {
		margin-top: ${SpacingSize.x100};
	}
`;

export const ColorScheme = styled.div`
	align-items: center;
	display: inline-flex;
	gap: 0.5rem;
`;

export const ColorSchemeToggler = styled(ColorSchemeTogglerComponent)`
	align-items: center;
	display: inline-flex;
	gap: 0.5rem;
`;

export const SiteFooterNav = styled(SiteFooterSection)`
	display: flex;
	flex-wrap: wrap;
	gap: ${SpacingSize.x100} 2ch;
`;
