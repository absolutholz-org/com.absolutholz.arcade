import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorMessage } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Form Elements/ErrorMessage',
	component: ErrorMessage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		type: {
			options: ['text'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof ErrorMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorMessage> = (args) => (
	<ErrorMessage {...args} />
);

export const _ErrorMessage_ = Template.bind({});
_ErrorMessage_.displayName = 'ErrorMessage';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_ErrorMessage_.args = {
	type: 'text',
	defaultValue: 'lorem ipsum',
};
