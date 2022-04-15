import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Headline200 as Headline200Component } from '.';
import { LOREM_IPSUM } from '../../loremIpsum';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Headline/Headline200',
	component: Headline200Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Headline200>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Headline200Component> = (args) => (
	<Headline200Component {...args} />
);

export const Headline200 = Template.bind({});
Headline200.storyName = 'Headline200';
Headline200.args = {
	children: LOREM_IPSUM,
};
