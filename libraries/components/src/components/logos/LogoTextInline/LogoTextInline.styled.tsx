import styled from 'styled-components';

import { LogoText } from '../LogoText';
import { LogoAbsolutholz } from '../LogoText/LogoText.styled';

export const LogoTextInline = styled(LogoText)`
	align-items: center;
	display: inline-flex;
	gap: 0.5ch;
	line-height: inherit;

	> ${LogoAbsolutholz} {
		font-size: 0.8em;
	}
`;
