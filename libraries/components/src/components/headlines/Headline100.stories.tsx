import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline100 as Headline100Component } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Headline/Headline100',
	component: Headline100Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Headline100>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Headline100Component> = (args) => (
	<Headline100Component {...args} />
);

export const Headline100 = Template.bind({});
Headline100.storyName = 'Headline100';
Headline100.args = {
	children: LOREM_IPSUM_SENTENCE,
};
