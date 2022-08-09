import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Billboard } from '.';
import { StoryExampleContent } from '../../StoryExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Billboard',
	component: Billboard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Billboard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Billboard> = (args) => (
	<Billboard {...args} />
);

export const _Billbaord_ = Template.bind({});
_Billbaord_.storyName = 'Billboard';
// More on args: https://storybook.js.org/docs/react/writing-stories/args
_Billbaord_.args = {
	slotHeadline: 'Lorem ipsum dolor',
	children: <StoryExampleContent />,
	imgUri: 'https://plchldr.co/i/500x250',
};
