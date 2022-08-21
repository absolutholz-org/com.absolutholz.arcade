import styled from 'styled-components';

import { typoSizeCss } from '../../foundations';

export const Billboard = styled.div`
	/* https://blog.logrocket.com/advanced-effects-with-css-background-blend-modes-4b750198522a/ */
	background: linear-gradient(hsl(0 200% 50% / 0.9), transparent),
		linear-gradient(to top left, hsl(120 100% 50% / 0.9), transparent),
		linear-gradient(to top right, hsl(240 100% 50% / 0.9), transparent);
	background-blend-mode: screen;
	display: flex;
	flex-direction: column;
	justify-content: end;
	min-height: 20rem;
`;

export const BillboardHeadline = styled.h1`
	${typoSizeCss(300)}
	font-weight: 400;
	margin-block: 0;
`;
