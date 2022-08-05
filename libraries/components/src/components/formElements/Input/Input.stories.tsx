import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Form Elements/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		type: {
			options: ['text'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const _Text_ = Template.bind({});
_Text_.displayName = 'Input';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Text_.args = {
	type: 'text',
	defaultValue: 'lorem ipsum',
};

export const _Email_ = Template.bind({});
_Email_.displayName = 'Input';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Email_.args = {
	type: 'email',
	defaultValue: 'example@email.com',
};

export const _Password_ = Template.bind({});
_Password_.displayName = 'Input';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Password_.args = {
	type: 'password',
	defaultValue: 'Passw0rd!',
};
