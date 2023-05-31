import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: { onClick: { action: 'click' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ButtonOutlinedSmall_: Story = {
	args: {
		text: 'Lorem ipsum dolor',
		size: 's',
		variant: 'outlined',
		href: '/',
	},
};

export const _ButtonOutlinedLarge_: Story = {
	args: {
		text: 'Lorem ipsum dolor',
		size: 'l',
		variant: 'outlined',
		href: '/',
	},
};

export const _ButtonContainedSmall_: Story = {
	args: {
		text: 'Lorem ipsum dolor',
		size: 's',
		variant: 'contained',
		href: '/',
	},
};

export const _ButtonContainedLarge_: Story = {
	args: {
		text: 'Lorem ipsum dolor',
		size: 'l',
		variant: 'contained',
		href: '/',
	},
};
