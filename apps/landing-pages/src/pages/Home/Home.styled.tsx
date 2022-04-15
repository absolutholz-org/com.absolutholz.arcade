import styled from 'styled-components';

import {
	SpacingSize,
	TypoFamily,
	TypoSize,
	TypoWeight,
} from '@arcade/library-components';

export const Section = styled.section`
	padding-bottom: ${SpacingSize.x150};
	padding-top: ${SpacingSize.x150};
`;

export const CardGrid = styled.div`
	--tsr-list-max-columns: 6;
	--tsr-list-tsr-width: 300px;

	display: grid;
	gap: ${SpacingSize.x200} var(--gutter);
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(
		auto-fill,
		minmax(
			clamp(
				100% / var(--tsr-list-max-columns) - var(--gutter),
				var(--tsr-list-tsr-width),
				100%
			),
			1fr
		)
	);
`;
