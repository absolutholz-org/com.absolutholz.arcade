import { css } from '@emotion/react';

import { color } from '../color';

export const themeCss = css`
	accent-color: ${color('accent')};
	background-color: ${color('surface')};
	color: ${color('surface-on')};
`;
