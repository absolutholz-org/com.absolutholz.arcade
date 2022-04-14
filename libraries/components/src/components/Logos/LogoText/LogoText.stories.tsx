import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoText } from './LogoText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Logos/LogoText',
	component: LogoText,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof LogoText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoText> = (args) => (
	<LogoText {...args} />
);

export const Primary = Template.bind({});
