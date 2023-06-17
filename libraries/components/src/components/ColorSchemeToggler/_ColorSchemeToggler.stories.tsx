import type { Meta, StoryObj } from '@storybook/react';

import { ColorSchemeToggler } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/ColorSchemeToggler',
	component: ColorSchemeToggler,
} satisfies Meta<typeof ColorSchemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ColorSchemeToggler_: Story = {
	args: {
	},
};

