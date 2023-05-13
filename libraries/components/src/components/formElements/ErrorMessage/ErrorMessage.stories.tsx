import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorMessage } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Form Elements/ErrorMessage',
	component: ErrorMessage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ErrorMessage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorMessage> = (args) => <ErrorMessage {...args} />;

export const _ErrorMessage_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_ErrorMessage_.args = {
	children: LOREM_IPSUM_SENTENCE,
};
