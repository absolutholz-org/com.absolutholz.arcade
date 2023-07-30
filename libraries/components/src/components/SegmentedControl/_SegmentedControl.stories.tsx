import type { Meta, StoryObj } from '@storybook/react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { SegmentedControl } from '.';

const meta: Meta<typeof SegmentedControl> = {
	title: 'Components/SegmentedControl',
	component: SegmentedControl,
	argTypes: { onClick: { action: 'controls click' } },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const SegmentedControl_: Story = {
	args: {
		controls: [
			{
				text: 'Option',
				value: '1',
				isSelected: true,
			},
			{
				icon: ArrowRightIcon,
				value: 'two',
			},
			{
				icon: ArrowRightIcon,
				text: 'Option',
				value: 'true',
				isDisabled: true,
			},
		],
	},
};
