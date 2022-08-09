import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LogoAbsolutholz } from './LogoAbsolutholz';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/logos/LogoAbsolutholz',
	component: LogoAbsolutholz,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof LogoAbsolutholz>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LogoAbsolutholz> = (args) => (
	<LogoAbsolutholz {...args} />
);

export const _Template_ = Template.bind({});
_Template_.storyName = 'LogoAbsolutholz';
