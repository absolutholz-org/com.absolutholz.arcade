import type { Meta, StoryObj } from '@storybook/react';

import { PageGridColumn } from '../PageGridColumn';
import { StoryPlaceholder, StoryPlaceholder_Spacing } from '../../../storyHelpers/StoryPlaceholder';
import { PageGridRow } from '../PageGridRow';
import { PageGridContainer } from '../PageGridContainer';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/Layout/PageGridColumn',
	component: PageGridColumn,
	decorators: [
		(Story) => (
			<StoryPlaceholder_Spacing>
				<PageGridContainer>
					<PageGridRow>
						<Story />
					</PageGridRow>
				</PageGridContainer>
			</StoryPlaceholder_Spacing>
		),
	],
} satisfies Meta<typeof PageGridColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _FullWidth_: Story = {
	args: {
		children: <StoryPlaceholder>PageGridColumn</StoryPlaceholder>,
	},
};

export const _HalfWidth_: Story = {
	args: {
		children: <StoryPlaceholder>PageGridColumn</StoryPlaceholder>,
		span: 6,
	},
};
