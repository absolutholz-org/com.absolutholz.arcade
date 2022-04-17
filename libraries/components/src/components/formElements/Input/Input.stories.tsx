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

export const _Input_ = Template.bind({});
_Input_.displayName = 'Input';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Input_.args = {
	type: 'text',
};

// export const Filled = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Filled.args = {
// 	children: 'Input',
// 	variant: InputVariant.Filled,
// 	renderAs: 'Input',
// 	inline: true,
// };

// export const Outlined = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Outlined.args = {
// 	children: 'Input',
// 	variant: InputVariant.Outlined,
// 	renderAs: 'Input',
// 	inline: true,
// };

// export const Text = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Text.args = {
// 	children: 'Input',
// 	variant: InputVariant.Text,
// 	renderAs: 'Input',
// 	inline: true,
// };

// export const Tonal = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Tonal.args = {
// 	children: 'Input',
// 	variant: InputVariant.Tonal,
// 	renderAs: 'Input',
// 	inline: true,
// };
