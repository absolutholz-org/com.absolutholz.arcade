import type { Meta, StoryObj } from '@storybook/react';

import { LogoAbsolutholz } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Logos/LogoAbsolutholz',
	component: LogoAbsolutholz,
} satisfies Meta<typeof LogoAbsolutholz>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _AsSmall_: Story = {
	args: {
		relativeSize: 's',
	},
};

export const _AsMedium_: Story = {
	args: {
		relativeSize: 'm',
	},
};

export const _AsLarge_: Story = {
	args: {
		relativeSize: 'l',
	},
};
