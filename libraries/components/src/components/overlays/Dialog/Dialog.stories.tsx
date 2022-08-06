import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dialog } from '.';
import { ExampleContent } from '../ExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Overlays/Dialog',
	component: Dialog,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dialog> = (args) => (
	<>
		<ExampleContent />
		<Dialog {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</Dialog>
	</>
);

export const _Dialog_ = Template.bind({});
_Dialog_.storyName = 'Dialog';
_Dialog_.args = {
	show: true,
};
