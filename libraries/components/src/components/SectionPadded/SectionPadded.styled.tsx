import styled, { css } from 'styled-components';

import { SpacingSize } from '../../enums';

export const SectionPadded = styled.div<{
	$spacing?: SpacingSize;
	$omit?: 'top' | 'bottom';
}>`
	${({ $omit, $spacing = SpacingSize.x100 }) =>
		$omit !== 'bottom' &&
		css`
			padding-bottom: ${$spacing};
		`}
	${({ $omit = false, $spacing = SpacingSize.x100 }) =>
		$omit !== 'top' &&
		css`
			padding-top: ${$spacing};
		`}
`;
