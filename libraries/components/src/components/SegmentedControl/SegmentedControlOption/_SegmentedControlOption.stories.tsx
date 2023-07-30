import type { Meta, StoryObj } from '@storybook/react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { SegmentedControlOption } from '.';

const meta: Meta<typeof SegmentedControlOption> = {
	title: 'Components/SegmentedControl/SegmentedControlOption',
	component: SegmentedControlOption,
	argTypes: { onClick: { action: 'option click' } },
};

export default meta;
type Story = StoryObj<typeof SegmentedControlOption>;

export const WithText_: Story = {
	args: {
		text: 'option',
	},
};

export const WithIcon_: Story = {
	args: {
		icon: ArrowRightIcon,
	},
};

export const WithTextAndIcon_: Story = {
	args: {
		icon: ArrowRightIcon,
		text: 'option',
	},
};

export const AsSelected_: Story = {
	args: {
		icon: ArrowRightIcon,
		isSelected: true,
		text: 'option',
	},
};

export const AsDisabled_: Story = {
	args: {
		icon: ArrowRightIcon,
		isDisabled: true,
		text: 'option',
	},
};
