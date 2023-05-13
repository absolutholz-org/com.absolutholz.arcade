import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputGroup } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../../loremIpsum';
import { Input } from '../Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Form Elements/InputGroup',
	component: InputGroup,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof InputGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => <InputGroup {...args} />;

export const _InputGroup_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_InputGroup_.args = {
	slotLabel: LOREM_IPSUM_SENTENCE,
	slotInput: <Input id='test' type='text' defaultValue='lorem ipsum dolor' />,
	inputId: 'test',
};

export const _Required_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Required_.args = {
	slotLabel: LOREM_IPSUM_SENTENCE,
	required: true,
	slotInput: <Input id='test' type='text' defaultValue='lorem ipsum dolor' />,
	inputId: 'test',
};

export const _HelpText_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_HelpText_.args = {
	slotLabel: LOREM_IPSUM_SENTENCE,
	required: true,
	helpText: LOREM_IPSUM_SENTENCE,
	slotInput: <Input id='test' type='text' defaultValue='lorem ipsum dolor' />,
	inputId: 'test',
};
