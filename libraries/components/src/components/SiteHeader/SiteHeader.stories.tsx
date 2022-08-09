import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SiteHeader } from '.';
import { BrowserRouter } from 'react-router-dom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'SiteHeader',
	component: SiteHeader,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SiteHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteHeader> = (args) => (
	<BrowserRouter>
		<SiteHeader {...args} />
	</BrowserRouter>
);

export const _SiteHeader_ = Template.bind({});
_SiteHeader_.args = {};
