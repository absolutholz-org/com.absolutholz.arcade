import type { Meta, StoryObj } from '@storybook/react';
import HomeIcon from '@mui/icons-material/Home';

import { Breadcrumbs } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Breadcrumbs',
	component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _Breadcrumbs_: Story = {
	args: {
		breadcrumbs: [
			{
				href: '#',
				label: 'Home',
				icon: <HomeIcon />,
			},
			{
				href: '#',
				text: 'Category',
			},
			{
				href: '#',
				label: 'Longer page title',
				text: 'Page',
			},
		],
	},
};
