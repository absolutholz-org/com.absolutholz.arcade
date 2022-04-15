import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VisuallyHidden } from '.';
import { StoryExampleContent } from '../../StoryExampleContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout/VisuallyHidden',
	component: VisuallyHidden,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof VisuallyHidden>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VisuallyHidden> = (args) => (
	<VisuallyHidden {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	children: <StoryExampleContent />,
};
