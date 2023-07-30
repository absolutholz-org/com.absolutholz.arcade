import type { Meta, StoryObj } from '@storybook/react';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Button',
	component: Button,
	argTypes: { onClick: { action: 'click' } },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _Button_: Story = {
	args: {
		icon: PlayCircleOutlineRoundedIcon,
		text: 'Lorem ipsum dolor',
	},
};

export const _AsAnchor_: Story = {
	args: {
		icon: PlayCircleOutlineRoundedIcon,
		text: 'Lorem ipsum dolor',
		href: '/',
	},
};

export const _AsLink_: Story = {
	args: {
		icon: PlayCircleOutlineRoundedIcon,
		text: 'Lorem ipsum dolor',
		to: '/',
	},
};
