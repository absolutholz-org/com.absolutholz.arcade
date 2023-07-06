import styled from "@emotion/styled";

import { Stack } from "@arcade/library-components/src/components/Stack";

export const CustomPresetList = styled(Stack)`
	justify-content: space-between;
`;

export const CustomPresetList_Title = styled.h3`
	font: inherit;
	margin: 0;
`;

export const CustomPresetList_Separator = styled.span`
	background: currentColor;
	border-radius: 50vmax;
	display: inline-block;
	height: 1em;
	margin-inline: 1.5ch;
	opacity: 0.75;
	width: 0.125em;
	vertical-align: -0.125em;
`;
