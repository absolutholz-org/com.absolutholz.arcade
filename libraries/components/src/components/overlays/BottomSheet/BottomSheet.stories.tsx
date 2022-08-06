import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BottomSheet } from '.';
import { ExampleContent } from '../ExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Overlays/BottomSheet',
	component: BottomSheet,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof BottomSheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomSheet> = (args) => (
	<>
		<ExampleContent />
		<BottomSheet {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</BottomSheet>
	</>
);

export const _BottomSheet_ = Template.bind({});
_BottomSheet_.storyName = 'BottomSheet';
_BottomSheet_.args = {
	show: true,
};
