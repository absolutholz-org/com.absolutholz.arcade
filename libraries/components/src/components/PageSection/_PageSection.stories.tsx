import type { Meta, StoryObj } from '@storybook/react';

import { PageSection } from './_PageSection';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Base Components/Layout/PageSection',
	component: PageSection,
} satisfies Meta<typeof PageSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _PageSection_: Story = {
	args: {
		children: 'Page Section',
	},
};
