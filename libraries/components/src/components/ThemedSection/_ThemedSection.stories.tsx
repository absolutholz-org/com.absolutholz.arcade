import type { Meta, StoryObj } from '@storybook/react';

import { ThemedSection } from '.';
import { PageGridContainer } from '../PageGrid/PageGridContainer';
import { LOREM_IPSUM } from '../../storyHelpers/placeholderText';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
	title: 'Components/ThemedSection',
	component: ThemedSection,
} satisfies Meta<typeof ThemedSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const _ThemedSection_: Story = {
	args: {
		children: <PageGridContainer><p>{LOREM_IPSUM}</p><p>{LOREM_IPSUM}</p></PageGridContainer>
	},
};
