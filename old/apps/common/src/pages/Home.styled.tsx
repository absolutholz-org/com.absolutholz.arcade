import styled from 'styled-components';

import {
	Icon,
	IconText,
	SpacingSize,
	TypoSize,
	TypoWeight,
} from '@arcade/components';

export const Section = styled.section`
	padding-bottom: ${SpacingSize.x150};
	padding-top: ${SpacingSize.x150};
`;

export const SectionHeadline = styled.div`
	font-size: ${TypoSize.x125};
	font-weight: ${TypoWeight.Normal};
	margin: 0 0 ${SpacingSize.x100} 0;
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

export const PageHeadline = styled.div`
	font-size: ${TypoSize.x400};
	font-weight: ${TypoWeight.Light};
	line-height: 1;
`;

export const PageHeadlineSub = styled.div`
	font-size: ${TypoSize.x125};
	font-weight: ${TypoWeight.Normal};
	line-height: 1;
`;

export const SectionHeader = styled(IconText)`
	margin: 0;
	padding-bottom: ${SpacingSize.x150};
	padding-top: 6rem;
`;
