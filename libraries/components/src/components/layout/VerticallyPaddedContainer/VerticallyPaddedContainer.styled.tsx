import styled, { css } from 'styled-components';

import { space, Space } from '../../../foundations/spacing/space';

export const VerticallyPaddedContainer = styled.div<{
	$spacing?: Space;
	$omit?: 'top' | 'bottom';
}>`
	${({ $omit, $spacing = 100 }) =>
		$omit !== 'bottom' &&
		css`
			padding-bottom: ${space($spacing)};
		`}
	${({ $omit = false, $spacing = 100 }) =>
		$omit !== 'top' &&
		css`
			padding-top: ${space($spacing)};
		`}
`;
