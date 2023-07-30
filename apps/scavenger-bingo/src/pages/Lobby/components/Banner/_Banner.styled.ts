import styled from '@emotion/styled';

import { color } from '@arcade/library-components/src/components/Theme';
import { space } from '@arcade/library-components/src/foundations/spacing/space';

export const Banner = styled.div`
	background-color: color-mix(in hsl, ${color('accent')}, transparent 90%);
	border: ${color('accent')} 4px solid;
	border-radius: 10px;
	padding: ${space('s')};
`;
