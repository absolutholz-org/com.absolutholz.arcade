import type { Meta, StoryObj } from '@storybook/react';

import { ArcadeFooter } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/ArcadeFooter',
	component: ArcadeFooter,
} satisfies Meta<typeof ArcadeFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ArcadeFooter_: Story = {
	args: {},
};
