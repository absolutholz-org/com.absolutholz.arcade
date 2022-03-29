import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardBillboard } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'CardBillboard',
	component: CardBillboard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof CardBillboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardBillboard> = (args) => (
	<CardBillboard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	children: 'Card Billboard',
	imgUri: 'https://plchldr.co/i/500x250',
};
