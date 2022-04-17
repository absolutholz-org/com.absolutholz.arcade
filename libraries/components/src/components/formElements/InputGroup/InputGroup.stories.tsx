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
	<InputGroup slotInput={<Input id='test' />} inputId='test' {...args} />
);

export const _InputGroup_ = Template.bind({});
_InputGroup_.displayName = 'InputGroup';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_InputGroup_.args = {
	slotLabel: 'Lorem ipsum',
};
