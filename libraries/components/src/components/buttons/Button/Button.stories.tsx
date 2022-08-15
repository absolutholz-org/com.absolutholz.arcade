import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';
import mdx from './Button.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		variant: {
			options: ['elevated', 'filled', 'outlined', 'text', 'tonal'],
			control: { type: 'radio' },
		},
	},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const _Elevated_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Elevated_.args = {
	children: 'Button',
	variant: 'elevated',
	renderAs: 'button',
	inline: true,
};

export const _Filled_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Filled_.args = {
	children: 'Button',
	variant: 'filled',
	renderAs: 'button',
	inline: true,
};

export const _Outlined_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Outlined_.args = {
	children: 'Button',
	variant: 'outlined',
	renderAs: 'button',
	inline: true,
};

export const _Text_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Text_.args = {
	children: 'Button',
	variant: 'text',
	renderAs: 'button',
	inline: true,
};

export const _Tonal_ = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Tonal_.args = {
	children: 'Button',
	variant: 'tonal',
	renderAs: 'button',
	inline: true,
};
