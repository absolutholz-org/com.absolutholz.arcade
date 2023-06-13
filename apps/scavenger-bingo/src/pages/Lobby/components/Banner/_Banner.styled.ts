import { space } from '@arcade/library-components/src/components/Space';
import { color } from '@arcade/library-components/src/components/Theme';
import styled from '@emotion/styled';

export const Banner = styled.div`
	background-color: ${color('accent')};
	/* background-image: linear-gradient(
		hsl(0 0% 100% / 0.85),
		hsl(0 0% 100% / 0.85)
	); */
	border: ${color('accent')} 4px solid;
	border-radius: 10px;
	padding: ${space('s')};
`;
