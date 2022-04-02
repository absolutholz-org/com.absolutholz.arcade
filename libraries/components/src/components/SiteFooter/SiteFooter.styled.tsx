import styled from 'styled-components';

import { SpacingSize } from '../../enums';
import { ColorSchemeToggler as ColorSchemeTogglerComponent } from '../ColorSchemeToggler';

export const SiteFooter = styled.footer`
	border-top: 1px solid hsla(var(--on-surface-hsl), 0.5);
	margin-top: ${SpacingSize.x300};
	padding-bottom: ${SpacingSize.x150};
	padding-top: ${SpacingSize.x150};
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
