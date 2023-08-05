import type { Meta, StoryObj } from '@storybook/react';

import { HighlightBoard } from '.';

const meta: Meta<typeof HighlightBoard> = {
	title: 'Components/HighlightBoard',
	component: HighlightBoard,
};

export default meta;
type Story = StoryObj<typeof HighlightBoard>;

export const AsRows_: Story = {
	args: {
		direction: 'rows',
	},
};

export const AsColumns_: Story = {
	args: {
		direction: 'columns',
	},
};

export const AsCorners_: Story = {
	args: {
		direction: 'corners',
	},
};

export const AsDiagonals_: Story = {
	args: {
		direction: 'diagonals',
	},
};
