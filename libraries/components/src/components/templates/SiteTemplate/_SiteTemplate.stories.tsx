import type { Meta, StoryObj } from '@storybook/react';

import { SiteTemplate } from '.';
import { StoryPlaceholder } from '../../../storyHelpers/StoryPlaceholder';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Templates/SiteTemplate',
	component: SiteTemplate,
} satisfies Meta<typeof SiteTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _SiteTemplate_: Story = {
	args: {
		children: <StoryPlaceholder />,
		pageTitle: 'Example site page',
	},
};
