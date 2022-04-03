import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoInlineText } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'LogoInlineText',
	component: LogoInlineText,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof LogoInlineText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoInlineText> = (args) => (
	<LogoInlineText {...args} />
);

export const Primary = Template.bind({});
