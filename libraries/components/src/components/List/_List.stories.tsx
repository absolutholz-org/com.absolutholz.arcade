import type { Meta, StoryObj } from '@storybook/react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

import { List } from '.';

const meta: Meta<typeof List> = {
	title: 'Base Components/List',
	component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

const ITEMS = [
	{
		leadingIcon: PersonOutlineRoundedIcon,
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
		trailingText: '+100',
	},
	{
		leadingIcon: PersonOutlineRoundedIcon,
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
	},
	{
		leadingIcon: PersonOutlineRoundedIcon,
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
	},
];

export const List_: Story = {
	args: {
		items: ITEMS,
	},
};

export const WithDividers_: Story = {
	args: {
		items: ITEMS,
		isDivided: true,
	},
};
