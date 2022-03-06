import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SectionPadded } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'SectionPadded',
	component: SectionPadded,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SectionPadded>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SectionPadded> = (args) => (
	<SectionPadded {...args} />
);

export const Primary = Template.bind({});
