import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';
import { ButtonVariant } from './IButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		variant: {
			options: [
				ButtonVariant.Elevated,
				ButtonVariant.Filled,
				ButtonVariant.Outlined,
				ButtonVariant.Text,
				ButtonVariant.Tonal,
			],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Elevated = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Elevated.args = {
	children: 'Button',
	variant: ButtonVariant.Elevated,
	renderAs: 'button',
	inline: true,
};

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
	children: 'Button',
	variant: ButtonVariant.Filled,
	renderAs: 'button',
	inline: true,
};

export const Outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Outlined.args = {
	children: 'Button',
	variant: ButtonVariant.Outlined,
	renderAs: 'button',
	inline: true,
};

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
	children: 'Button',
	variant: ButtonVariant.Text,
	renderAs: 'button',
	inline: true,
};

export const Tonal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Tonal.args = {
	children: 'Button',
	variant: ButtonVariant.Tonal,
	renderAs: 'button',
	inline: true,
};
