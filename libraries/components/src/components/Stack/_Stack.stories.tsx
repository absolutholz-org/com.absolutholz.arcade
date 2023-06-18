import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './_Stack';
import { CONTENT_STYLES, SPACING_STYLES } from '../../storyHelpers/placeholderStyles';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/Stack',
	component: Stack,
	decorators: [
		(Story) => (
			<div style={SPACING_STYLES}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _Column_: Story = {
	args: {
		children: (
			<>
				<div style={CONTENT_STYLES}>Item 1</div>
				<div style={CONTENT_STYLES}>Item 2</div>
				<div style={CONTENT_STYLES}>Item 3</div>
			</>
		),
	},
};

export const _Row_: Story = {
	args: {
		children: (
			<>
				<div style={CONTENT_STYLES}>Item 1</div>
				<div style={CONTENT_STYLES}>Item 2</div>
				<div style={CONTENT_STYLES}>Item 3</div>
				<div style={CONTENT_STYLES}>Item 4</div>
				<div style={CONTENT_STYLES}>Item 5</div>
				<div style={CONTENT_STYLES}>Item 6</div>
				<div style={CONTENT_STYLES}>Item 7</div>
				<div style={CONTENT_STYLES}>Item 8</div>
				<div style={CONTENT_STYLES}>Item 9</div>
				<div style={CONTENT_STYLES}>Item 10</div>
			</>
		),
		direction: 'row',
	},
};

export const _List_: Story = {
	args: {
		children: (
			<>
				<li style={CONTENT_STYLES}>Item 1</li>
				<li style={CONTENT_STYLES}>Item 2</li>
				<li style={CONTENT_STYLES}>Item 3</li>
			</>
		),
		shouldResetList: true,
		tag: 'ul',
	},
};
