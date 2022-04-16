import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardBillboard } from '.';
import { StoryExampleContent } from '../../../StoryExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Cards/CardBillboard',
	component: CardBillboard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof CardBillboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardBillboard> = (args) => (
	<CardBillboard {...args} />
);

export const _Template_ = Template.bind({});
_Template_.storyName = 'CardBillboard';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Template_.args = {
	children: <StoryExampleContent />,
	imgUri: 'https://plchldr.co/i/500x250',
};
