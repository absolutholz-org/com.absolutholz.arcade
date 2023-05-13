import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ColorSchemeToggler } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/ColorSchemeToggler',
	component: ColorSchemeToggler,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof ColorSchemeToggler>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorSchemeToggler> = (args) => (
	<ColorSchemeToggler {...args} />
);

export const _ColorSchemeToggler_ = Template.bind({});
_ColorSchemeToggler_.storyName = 'ColorSchemeToggler';
_ColorSchemeToggler_.args = {};
