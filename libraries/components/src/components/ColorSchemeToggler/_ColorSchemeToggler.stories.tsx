import type { Meta, StoryObj } from '@storybook/react';

import { ColorSchemeToggler } from '.';

const meta: Meta<typeof ColorSchemeToggler> = {
	title: 'Composite Components/ColorSchemeToggler',
	component: ColorSchemeToggler,
};

export default meta;
type Story = StoryObj<typeof ColorSchemeToggler>;

export const WithTextAndIcon_: Story = {
	args: {},
};

export const WithIconOnly_: Story = {
	args: {
		isTextVisible: false,
	},
};
