import type { Meta, StoryObj } from '@storybook/react';

import { PageGridContainer } from '.';
import {
	StoryPlaceholder,
	StoryPlaceholder_Spacing,
} from '../../../storyHelpers/StoryPlaceholder';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Layout/PageGridContainer',
	component: PageGridContainer,
	decorators: [
		(Story) => (
			<StoryPlaceholder_Spacing>
				<Story />
			</StoryPlaceholder_Spacing>
		),
	],
} satisfies Meta<typeof PageGridContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _PageGridContainer_: Story = {
	args: {
		children: <StoryPlaceholder>PageGridContainer</StoryPlaceholder>,
	},
};
