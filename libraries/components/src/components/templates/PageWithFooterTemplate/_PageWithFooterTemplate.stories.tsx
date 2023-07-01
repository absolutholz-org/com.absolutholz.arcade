import type { Meta, StoryObj } from '@storybook/react';

import { PageWithFooterTemplate } from '.';
import { StoryPlaceholder } from '../../../storyHelpers/StoryPlaceholder';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Templates/PageWithFooterTemplate',
	component: PageWithFooterTemplate,
} satisfies Meta<typeof PageWithFooterTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _PageWithFooterTemplate_: Story = {
	args: {
		children: <StoryPlaceholder />,
		pageTitle: 'Example site page',
	},
};
