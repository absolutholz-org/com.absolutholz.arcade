import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { space } from '../Space';

import type { SpaceLevel } from '../Space/_Space.types';
import type { StackDirection } from './_Stack.types';

function outputAppropriateGap(
	spaceLevelX?: SpaceLevel,
	spaceLevelY?: SpaceLevel
) {
	if (spaceLevelX && spaceLevelY) {
		return css`
			gap: ${space(spaceLevelY)} ${space(spaceLevelX)};
		`;
	}

	if (spaceLevelX) {
		return css`
			column-gap: ${space(spaceLevelX)};
		`;
	}

	if (spaceLevelY) {
		return css`
			row-gap: ${space(spaceLevelY)};
		`;
	}
}

export const Stack = styled.div<{
	$direction?: StackDirection;
	$spaceLevelX?: SpaceLevel;
	$spaceLevelY?: SpaceLevel;
}>`
	display: flex;
	flex-direction: ${({ $direction = 'column' }) => $direction};
	${({ $direction = 'column' }) =>
		$direction === 'row' &&
		css`
			flex-wrap: wrap;
		`}

	${({ $spaceLevelX, $spaceLevelY }) =>
		outputAppropriateGap($spaceLevelX, $spaceLevelY)}
`;
