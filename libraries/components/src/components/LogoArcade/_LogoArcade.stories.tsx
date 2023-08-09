import type { Meta, StoryObj } from '@storybook/react';

import { LogoArcade } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Logos/LogoArcade',
	component: LogoArcade,
} satisfies Meta<typeof LogoArcade>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _AsTwoLines_: Story = {
	args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _AsOneLine_: Story = {
	args: {
		isSingleLine: true,
	},
};
