import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

import { ThemeProps } from './_Theme.annotations';
import { colorSchemeCss } from './theme/_colorSchemeCss';
import { colorSchemesCssVars, themeCss } from './theme';

import theme from './themes/default.theme.json';

function getColorSet (themeSetId: string): SerializedStyles {
	const colorSet = theme.colors.find((colorSet) => colorSet.id === themeSetId);
	const lightCssVars = colorSchemesCssVars(colorSet!.light);
	const darkCssVars = colorSchemesCssVars(colorSet!.dark);
	
	return colorSchemeCss({lightCssVars, darkCssVars})
}

export const Theme = styled.div<ThemeProps>`
	${({themeSetId = 'default'}) => getColorSet(themeSetId)}
	${themeCss}
`;
