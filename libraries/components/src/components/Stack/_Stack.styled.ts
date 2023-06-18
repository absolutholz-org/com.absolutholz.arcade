import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { space } from '../Space';
import type { SpaceLevel } from '../Space/_Space.types';
import type { StackDirection } from './_Stack.types';

function outputAppropriateGap(
	spacingX?: SpaceLevel,
	spacingY?: SpaceLevel
) {
	if (spacingX && spacingY) {
		return css`
			gap: ${space(spacingY)} ${space(spacingX)};
		`;
	}

	if (spacingX) {
		return css`
			column-gap: ${space(spacingX)};
		`;
	}

	if (spacingY) {
		return css`
			row-gap: ${space(spacingY)};
		`;
	}
}

export const Stack = styled.div<{
	$direction?: StackDirection;
	$spacingX: SpaceLevel;
	$spacingY: SpaceLevel;
}>`
	display: flex;
	flex-direction: ${({ $direction = 'column' }) => $direction};
	${({ $direction = 'column' }) =>
		$direction === 'row' &&
		css`
			flex-wrap: wrap;
		`}

	${({ $spacingX, $spacingY }) => css`
		gap: ${space($spacingY)} ${space($spacingX)};
	`}
`;
