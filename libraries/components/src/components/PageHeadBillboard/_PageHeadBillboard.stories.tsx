import type { Meta, StoryObj } from '@storybook/react';

import { PageHeadBillboard } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/PageHeadBillboard',
	component: PageHeadBillboard,
} satisfies Meta<typeof PageHeadBillboard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _WithHeadlineOnly_: Story = {
	args: {
		headline: 'Scavenger Bingo',
	},
};

export const _WithPrefix_: Story = {
	args: {
		headline: 'Lobby',
		headlinePrefix: 'Scavenger Bingo',
	},
};

export const _WithSuffix_: Story = {
	args: {
		headline: 'Scavenger Bingo',
		headlineSuffix: 'absolutholz arcade',
	},
};

export const _WithPrefixAndSuffix_: Story = {
	args: {
		headline: 'Settings',
		headlinePrefix: 'Scavenger Bingo',
		headlineSuffix: 'absolutholz arcade',
	},
};
