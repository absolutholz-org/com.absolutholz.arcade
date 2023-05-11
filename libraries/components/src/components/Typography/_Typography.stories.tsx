import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/Typography',
	component: Typography,
	argTypes: {
		level: {
			control: { type: 'range', min: -2, max: 5, step: 1 },
		},
	},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _Typography_: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		level: 0,
	},
};
