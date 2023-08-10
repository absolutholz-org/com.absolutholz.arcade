import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { OmitSpacing, SpacingSize } from './_PageSection.types';
import { space } from '../../foundations/spacing/space';

export const PageSection = styled.div<{
	omitSpacing?: OmitSpacing;
	spacingSize: SpacingSize;
}>`
	padding-block: ${({ spacingSize }) => space(spacingSize)};
	${({ omitSpacing }) =>
		omitSpacing &&
		css`
			padding-${omitSpacing}: 0;
		`}
`;
