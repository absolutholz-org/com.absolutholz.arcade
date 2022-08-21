import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { SiteFooter } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'General/SiteFooter',
	component: SiteFooter,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof SiteFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SiteFooter> = (args) => (
	<BrowserRouter>
		<SiteFooter {...args} />
	</BrowserRouter>
);

export const _SiteFooter_ = Template.bind({});
_SiteFooter_.args = {};
