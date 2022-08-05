import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputGroup } from '.';
import { Input } from '../Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Form Elements/InputGroup',
	component: InputGroup,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => (
	<InputGroup
		slotInput={
			<Input id='test' type='text' defaultValue='lorem ipsum dolor' />
		}
		inputId='test'
		{...args}
	/>
);

export const _InputGroup_ = Template.bind({});
_InputGroup_.displayName = 'InputGroup';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_InputGroup_.args = {
	slotLabel: 'Lorem ipsum',
};

export const _Required_ = Template.bind({});
_Required_.displayName = 'Required';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Required_.args = {
	slotLabel: 'Lorem ipsum',
	required: true,
};

export const _HelpText_ = Template.bind({});
_HelpText_.displayName = 'Help Text';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_HelpText_.args = {
	slotLabel: 'Lorem ipsum',
	required: true,
	helpText:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
