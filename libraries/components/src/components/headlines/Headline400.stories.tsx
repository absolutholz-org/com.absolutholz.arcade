import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline400 as Headline400Component } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Headline/Headline400',
	component: Headline400Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Headline400>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Headline400Component> = (args) => (
	<Headline400Component {...args} />
);

export const Headline400 = Template.bind({});
Headline400.storyName = 'Headline400';
Headline400.args = {
	children: LOREM_IPSUM_SENTENCE,
};
