import type { Meta, StoryObj } from '@storybook/react';

import { VisuallyHidden } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../storyHelpers/placeholderText';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/VisuallyHidden',
	component: VisuallyHidden,
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _VisuallyHidden_: Story = {
	args: {
		children: LOREM_IPSUM_SENTENCE,
	},
};
