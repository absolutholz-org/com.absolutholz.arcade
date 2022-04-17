import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline300 as Headline300Component } from '.';
import { LOREM_IPSUM_SENTENCE } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Headline/Headline300',
	component: Headline300Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Headline300>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Headline300Component> = (args) => (
	<Headline300Component {...args} />
);

export const Headline300 = Template.bind({});
Headline300.storyName = 'Headline300';
Headline300.args = {
	children: LOREM_IPSUM_SENTENCE,
};
