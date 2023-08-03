import type { Meta, StoryObj } from '@storybook/react';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { ListItem } from '.';

const meta: Meta<typeof ListItem> = {
	title: 'Base Components/List/ListItem',
	component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const WithSingleLine_: Story = {
	args: {
		headline: 'List Item headline',
	},
};

export const WithSupportingText: Story = {
	args: {
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
	},
};

export const WithLeadingIcon_: Story = {
	args: {
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
		leadingIcon: PersonOutlineRoundedIcon,
	},
};

export const WithTrailingText: Story = {
	args: {
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
		leadingIcon: PersonOutlineRoundedIcon,
		trailingText: '+100',
	},
};

export const WithTrailingIcon: Story = {
	args: {
		headline: 'List Item headline',
		supportingText: 'List Item supporting text',
		leadingIcon: PersonOutlineRoundedIcon,
		trailingIcon: ArrowRightIcon,
	},
};
