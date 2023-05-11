import type { Meta, StoryObj } from '@storybook/react';

import { PageHeadlineBillboard } from './_PageHeadlineBillboard';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/PageHeadlineBillboard',
	component: PageHeadlineBillboard,
} satisfies Meta<typeof PageHeadlineBillboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _PageHeadlineBillboard_: Story = {
	args: {
		headlineText: 'Page Headline Billboard',
		backgroundImage: 'green-hills.webp',
	},
};
