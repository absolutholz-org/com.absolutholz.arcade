import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/Slider',
	component: Slider,
	argTypes: { onChange: { action: 'changed' } },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _Slider_: Story = {
	args: {
		max: 3,
	},
};
