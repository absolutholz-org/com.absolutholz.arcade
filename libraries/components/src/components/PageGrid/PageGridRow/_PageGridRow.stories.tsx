import type { Meta, StoryObj } from '@storybook/react';

import { PageGridRow } from '../PageGridRow';
import {
	StoryPlaceholder,
	StoryPlaceholder_Content,
	StoryPlaceholder_Spacing,
} from '../../../storyHelpers/StoryPlaceholder';
import { PageGridContainer } from '../PageGridContainer';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Layout/PageGridRow',
	component: PageGridRow,
	decorators: [
		(Story) => (
			<StoryPlaceholder_Spacing>
				<PageGridContainer>
					<Story />
				</PageGridContainer>
			</StoryPlaceholder_Spacing>
		),
	],
} satisfies Meta<typeof PageGridRow>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _PageGridRow_: Story = {
	args: {
		children: <StoryPlaceholder>PageGridRow</StoryPlaceholder>,
	},
};
