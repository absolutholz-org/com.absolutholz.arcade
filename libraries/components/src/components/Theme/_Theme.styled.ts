import styled from '@emotion/styled';

import { themeCss } from './_Theme.styles';
import { ThemeProps } from './_Theme.annotations';

export const Theme = styled.div<ThemeProps>`
	${({ themeSetId = 'default' }) => themeCss(themeSetId)}
`;
