import type { Meta, StoryObj } from '@storybook/react';

import { ArcadePage } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/ArcadePage',
	component: ArcadePage,
} satisfies Meta<typeof ArcadePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ArcadePage_: Story = {
	args: {
		children: 'Lorem ipsum',
		pageTitle: 'Test Page',
	},
};
