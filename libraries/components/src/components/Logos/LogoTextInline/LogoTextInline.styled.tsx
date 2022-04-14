import styled from 'styled-components';

import { LogoText } from '../LogoText';
import { Absolutholz } from '../LogoText/LogoText.styled';

export const LogoTextInline = styled(LogoText)`
	align-items: baseline;
	display: inline-flex;
	gap: 0.5ch;
	line-height: inherit;

	> ${Absolutholz} {
		font-size: 0.9em;
	}
`;
