import type { Meta, StoryObj } from '@storybook/react';

import { ResetList } from './_ResetList';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/ResetList',
	component: ResetList,
} satisfies Meta<typeof ResetList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ResetList_: Story = {
	args: {
		children: (
			<>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</div>
				<div>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</>
		),
	},
};
